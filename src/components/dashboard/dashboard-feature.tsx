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
    "3ugoqr7oM6ikGVGgArCPSQP2ZzewKBE2qVNdmpXBbtAMikaveQXwk9BrhxnWKkjsdx8oa2ktbMvLSdNFfC9tctLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lqkrt8xwd4NqSrjsmenU2a9euKqbN2no9eKkUt48SRwRw7DDT4mGE6i52xsJP54SDZmyBADidZcWuY9mUVjSKhp",
  "key1": "5ejNzKqpfzeY2MJ4FyKuX4WX9egFXP8UMFv1KYySdyAmHtin8YCzVfpZkVVhVubbHyyPV2ymuyRPpE2jiJCcxzCp",
  "key2": "hHYvd9rYhhFCxTrPVCgfqUtoEsjhxRyt7BKt6auvYb4LkfAHBwYNj8o9LKeSoKCRyqji55rsaMrt8y6LGA4EXvp",
  "key3": "4SU3Q8p1xaBWcv5ZF4YSiox9Erm1jKmgMkgx5gYYaUzBuNBp2cgHsbFszA8ntDYxaxn9MktvYxwyoLymyDFDSC5A",
  "key4": "2JYcqHvHG1waaXrxTsoAFXhNbwFyUJaqWF48SzXhmnVbSdkXsVCRBtzeXSzT6BNCTJZC2LMi1hAXNvAhDwsRogAt",
  "key5": "gMq1qbRiWYAv3exnSPjk9azMBdXUWUGMAiPfMDztwwpH5H9tWNLDttoUqu5TpCzKLae79UdDup7SYSyYi9Ssyx4",
  "key6": "2tTnvopKoX9YV6TUhdK4otdNUxrFtbJTh9hPRPWXADYYL6Xu4yDsGyQ5AQxdb69konb4smjKpJedNYjtvge2mKeU",
  "key7": "3wA2S9srM3bJCDNN1BQAJhG5DnqftSJBsNE7UpZTALZUzsVtCJF6QszB1xPw43ptZ1L265Xx7Yfkt8PqQt1kLQd9",
  "key8": "5maNmWYmeL4vjqqki4Ac97gXNNyTFLJ5Swmcdeg5TBqFMisGaevPokkjeRPnTJs9h6ur3qGwovBPDiHjcw1wJALQ",
  "key9": "D7WiNs7uU3XCE8ftwYxCStZtFHGpAH4w99iCXLQcnMri1GYa43RNuzFBdc8M9xmGgb4Kdn4r175g4Es75cJ9qiN",
  "key10": "2qmyKPP4rg6AbtZzHfdL9PaMKa9MHSwroYzyVqJgAk4yURWZuhsSXpEknus5woE1XDLvPLtgx3r2ZcfQtciTW3nz",
  "key11": "3ePrsBnZL4ifeshU1PaspwMuCRvMwW82jDsVBLaSRk5GBBgxbLdm3WiXNijvz2UHM2tPKLdsBvoRag87BDeYTHh3",
  "key12": "4ieAqAyZHuUs53q99kR39Q9Wd5xwWyr36kkKzsnMnrtuyV6RfuusNMuixXAdF2L2V8zXuYh5HJs2ddAGPFLVxsbq",
  "key13": "nkyQA6wmWsNXjwpq31E5uSydrXKanBwGfkauL3FK6EHnW7J6cxJg2sduoyuknpy1Zsr2YrKmAtqE5quJ98wwdSx",
  "key14": "86uZkKrykB8ro5XsWrXAzwK4eSe4Tur1uneLr8u2rBtqxracUpU4KVGeM62xdgMdj1ZU7vybih4ZogUMy4zS3QZ",
  "key15": "k8CQxMbJfsikmYKPoUJwkZnMj4atzBXzfMNrAw9NMkSHh7MdeCgZwuxwfvofUKirH7hUktQHGYPrGQEbFQpCp7k",
  "key16": "3h692ZMEzogoFJz8KqAW16nxMR6Z3nQhAx5cJ25yZLsG146wfwVTrQywz4PsJJyckLe8Tgfje91oHEyouTxd6fth",
  "key17": "3RdRn4SUujkZSEifiDuFpcxRhnUhkPLWEpzkmT2JKYUXtC88ggUSdsCSXuDTmpKt8M7m3trN7TEiRTjjdZ3iY8zH",
  "key18": "5rtczvHWBdugMKW4S4cQ7153R5P4sYeqTpBNTe9dxRDmqV6UzbmNuxHhcLxJmcunFuret3RZsNbL2EcM2e85fUED",
  "key19": "3T1EefQPibMfJ4bWpuXMMLLdahdo9ono5fqnzK4MNtHkPTUAM5mDMvcuXpoS5CSXhUCvEaBB568JR2facU4ZPmqu",
  "key20": "5ZXQWULrtJuKksBG4cSzorRHQffJmaqjVHTHaFfkzbP2Ak1AeEPuTDREEvaWuPCcSCgurMVqKwHnoDYsjYdCGHp5",
  "key21": "5HZSbtyE7ervA2e6UBXRq4kaXiQGAiGWs52WUrnYMCB1Ms5ip6gmJTc5SUB24XzE5tH6bRkvpPxWThtfPjPk37F6",
  "key22": "YNzEKprRDUL9XEo5otZ6K2yFy8f9d9SS8sXRMb5mBjGV1fUbcoPq5CSGMBnR2wCmHva8ctJcayKXyCmmYBcJtvk",
  "key23": "3EeAmQ9igocZpHCNvhaeXqUn6rDzr1mqz6vDRpBBstrMrnvuw6FNNV3S1Ez3MdZAENcq91efzsB9E7p3MkRoHFq4",
  "key24": "zTa4GtYqe51eJh3QMNo21iUHkL427unBTzg9fdeGGB9dM4p9nXjArGoz7UNrRg3WdNKD2z89bwQuZNTVgGoYXrA",
  "key25": "2T2HXdGTDMiyVg58pKX56z3QxHUpy7utFeo8wdGMD1S2QJ9Xn2BxTCmfbqC1mGgBsFPsQmBhb9KDAEGL5xvD8gcd",
  "key26": "rJUwekgb7JvhwaBbfsZ3ABjrHdXTgb1a8Bz9b1vAx3iveFbaDokzXg5CNLNpkWcC8iDfa4iTmRFnsjz89TEAVD7",
  "key27": "5GAYH7vwrtmhQiuWyjK9Q3Li7ZTkDqiUzudVrWFLLRKfUu9goSZX2TK1tiv6FsEHrgT2gf3eaUqt3xHLvjBZXgNV",
  "key28": "5vHH9E18hPqyynHb6UNRUzdWwV8eC6QQ7Gu2fPSfKqhzrxqydzARkgnTpLpwxzg7mi2fiPdQYYG6LHu7v6uXxcCJ",
  "key29": "2HFdzBfqXXa7RVf3C8eQnVCXx4MT2KPU2vE2Mht9qpFhzkqgkyvDvTK59DcvB7TGwcaG4KqoJpxsBmFCPuHMJH9v"
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
