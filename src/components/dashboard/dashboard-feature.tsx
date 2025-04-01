/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "61H1oK8Dao9riVeKmuS623dL8Nh5wia3r4SGD4FEfKu6Z7CuJ93Mqs5NNGre8RTMi8BVfWGLDficiMkS5ypXioh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFk19tP4nTb6zABzRPSBiGVHPEsMCMBU1ZutYHaiLW8DorAtD4758tXuDmR83d25jVfg4B5GWVAVvtcHKvypyYU",
  "key1": "ttyYA82AQSi7n1ixjREuKHEAmQ1kbwbZVeKdvygwkyYp1VMf7Ph8PX9H5WN6qBn9CusjhUgtEzJQHep1RbjLPyZ",
  "key2": "4GSLnPcKzM45v6caCjzK5csvKj15MsduCFR5bQCpynNU2T2GXnkedTA8ABjrD8hjemERBD1bY9Qq6dJdqwkJSmS6",
  "key3": "2v3KpnheurPh8TRy19fN5aFbfymmwYEiMnYyQrtrc5UVAMeoY9riC171Nyy3pJhccnbsZJykScsJAbtTkwMZTC3k",
  "key4": "31xcqjDACd9nZcZL5fzyUk9VbsS2QXY2DpyRUH1XmAYAHP4hsw2Nx1B3ftUpS3wdDQ6hYaYA9WfZ1ZTCE5RW3Teb",
  "key5": "3vPWm94aAHumSSB4a58M2HAq8nRw7FoYR9GASyR1GZ1dYT8K75uKu9wW5hSZ9JYdU9FGqK92SQ3VbMbmpsNjU8Rp",
  "key6": "2Us8pqRQC4pWzHpuCqUmvLyo7VNEvdD48eLaGexRivwYfjHKKcxSegD9KXP78d112qHwsXpiWchznz291Cr1Pprs",
  "key7": "4NKDmX8WGjTkzLMpHS9hw3Pe53a22c8ChggCbXh194iQLFe5KLVD45moH6gwDYWdbZNdngSzcrmprKsdt558T8pA",
  "key8": "5NWYw5DWKyqMhMGrQVRfqcUkW5DLQxiqmF72dStLVCbKtqkH5YNBYtDiADMV9iri281pZg2TM1MoRG8f23AkKqu9",
  "key9": "3jc7jpfsnR7eG3vdptiUWhbVMtq19KVGjCD5yZoiMyns3SNKdhTa6DKficEZqk8DjgsUTXeNffWYFJy5unzFdran",
  "key10": "3CzMaAEEyWkx9q32g9LuJwSLjNnsWJCw7Zx6V77WD72iYz5867Xwo5Tk4BTBGBv3ib3C87zHCb8KemasnbkAMhoF",
  "key11": "39ZRpmqitX9hgpAVVSfrv9NUb8JmvX8BDpqj5innSkEi2Qu1mo5xnB6YAUsnivMLRm4akKoprnHbHbbiTe7Qyjuy",
  "key12": "shTDoJDK5i4heH7UaYkDt7j14aUiWeSCrBxQXt8UCEP9QaZhRyTbgHNsnyhm24VkmFd3NyVAakybacxBkM5jdFS",
  "key13": "3iBHMMoCkMEh4BeE4aKU4AGKLFkdn9GL7atBnReD7E9DyEy54ukXX7GMKxHxttZzM9SooUJAbSasyPn512pEbzm6",
  "key14": "WmXG8htdFNR5HMYmuA9YATnm5znigKgqnuhephqdAfKkRBCq3xPNUwEHsHJVeJNivvXaK9wA4TVyXjEgGVkAsgc",
  "key15": "38MmqNpbehWpL8fagNaqwW2uCVYr8ZbTau6YgAdQ13iUcnC2EJG4326n8Rbj5oHC4hrxH5yJaPpp4pm5LaPKh5cg",
  "key16": "4Bx3N3wUb2oQgfhjZmi7PD3h514Sravh1Vzt6EzixNWp7gEgfZxdRxudE1kMyBqPjwNcv3gG33pn4oxRKXpC41sQ",
  "key17": "47yjiyaFVrYNycFpFRdC2MQnG7v8biQXH3u5xwJhHnX76FH7YXSCCRExkCoESbqP3v9SsXGWL7TSv5X9BMhhEhGR",
  "key18": "4MhL1ySrQ26FHBdgG6K37fBvBiUD9HYLLN5H9FZXiff6zHir3SZ7VtkS7PQ8gcAPYp1syA9P4DrSD7PJLQKQNiQ2",
  "key19": "4tPLK91LQRW4AtMJnz2HiNvwEV5n72YLTm78utXQY9cWJjfzztWXFcxBX29ouyioHHafC59DRGMNAjdu9oFYSU75",
  "key20": "6HDVWWrYsD5kxADdV2j7Md12RjGvGiGiYq1HNeX5BrUtCbZc7uHt9NC4QA6RSR7Ezr8bgUuctQGqnazk6K6JmSd",
  "key21": "FreE3bwCTAtWrnoT8cL3Ph41rupnot6DCJoKKUSNMaZQ8ztoPqsUKh2jP4nW7Sfft5t6mYaJGD4oXreHxJprBoF",
  "key22": "361PbW7FHXW5GcMxFSX2TVzMZoj6qk9oJ7HSRKQrAu8cTCMVesbHPyn1XHB3dAmvZDjsrzMr2ZgfPmkCFFvEtrgX",
  "key23": "3mEqDhNTMY82i9FRyfdY8axYhC9EkPVexfEur9b195xjzmetkgQePr1bNKemkrRMZenanxBGxiuTGX67PQVcPPBD",
  "key24": "2CoHaZdFVedLvVFrqaSXvrdxKm4uN8ostt79c9Gw1KeNQdJs7PnHPWTx7sEyYNqDGL8vnw46bV5NQGitvu4veeAt",
  "key25": "2KQtWhoUz5inNXzgn2WRxpPWYk4we3ivzAwhBgxjdcS3oj24kvxiwh5xbyPktQfb55SxA8KXWbu32Sg4CefvNLTg",
  "key26": "2WDV15C8xJcrmBRaG6bnNTtk776NqBgkrsfUQu1nA7RhL7i36yPttyGvRzETmwbGcKS6wRph9xbUcZekbQK2axk6",
  "key27": "2sWWxk61HZtZiqFRmGTvyYSYiEsYamJGSduaXkMRnfVA3MV4y7knmWio1gcMabKRfTitf9r9YWEyFcnpyaBpyiUy",
  "key28": "3YghQ6kJkdYfYMtkbhyuWZDToMumDk9EBFoDXGxowM2hhBbMk2Jz6SuQM8F5N1zsvBDUkERKPfbK2qeBpnpTtx37",
  "key29": "4zT2aPLrBBJ15iHZaqffQRRzMnVTDg61GU273GQASPrCQESiU3MPFA9S3DciLN1rjMtA4sxKTqjx4os6AcSWWoeh",
  "key30": "38hUcVoQnnVatEQ8bSDfnEd5LLPSiaLqnM9oxx3owXz82SEVhJ15d6CFk5f7yh2LCP6FKdKTCvgJS2nLccP7wimC",
  "key31": "3xbNjsnZ1ZWYivASibV8LmZo2bfJemcTKnpom19xohEuSKno9VJws8oMHyRCoScfzchZce1XwytNYqFtVcvDMiEV",
  "key32": "3YwFdseR8ckXkyLLF2dxtoBeMpavTAWUsuGcNXmJaPLrShsBUR739M7GV3Xqv82aFpiFoZh318n7N5zsdjJBq3fK",
  "key33": "5zKnnTEug53T1YXNQkXyyeqs4zry9k1y8aVTo9mtUsNG7nrJNLAHN2j3kYNQ2ZKkVWw6DJxWbaN8ayvjXYCEPQFi",
  "key34": "9aE5dzAQwy2fSVzAz1iZG3K1fuCcViC2yGUwd7s5DfKXXrXifAuC6RwWyVwz6nNJAH84EpfmZFEEjjk7xK5cnSX",
  "key35": "4bYgSGTBkoPfGD9dvNkVukq1N7yH2QULSbYQ5o4vwvjWbeu2THXKWZvG8kMXSJCTZh87PDJMPyLNuryUD2cRiW7a",
  "key36": "3YVV6zQxUVnkHeZaMaxs8YH7BRqxkN26Vuhyx9fbekPuUZAbMXxwd6qLjFe9CenPeSAAezJgjz5mrKxX1dNHCWE6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
