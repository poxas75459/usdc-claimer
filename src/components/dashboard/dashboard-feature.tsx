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
    "2bRbtBiZ9W8zdUSthSK9gD5tGEGXhMdPTDSpLZvX2rbuMSY3uRf8vTzjLyNGLxG8A9MgtbzWaicQG7nGacy7gGmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVju2JQf1ckLDV6Ghd4bseWPQiaCgkJD7BmpSFY83a4ZTbEhS4rwjTdVgSrRtTJoFW9kE89rQmhVcyqtRgihZRC",
  "key1": "3gse2RwKp3UMpsjw9WAqfUPRJ6XxbN273gCPwxn5LRXoKhjcEaUyY4GD5Yk7oY8KbJsJf8qPBsHyScNWr6Zn9Rqn",
  "key2": "4JNrthisJTkEKTpMfzeLaR1KjdgWBA3yxu7GVWJTXMUavB66xAEyfnuxwSdC3zEWoKotVjqCNiwhN3e5MDit5r47",
  "key3": "4F4VWfqXUKNezDzCvnz21TvSAnGWH5yyAeUgMN6EXwRis3uosL1A3CZjpiD9Nhwga7UmptA7Gd87jZWLbQqgSRoY",
  "key4": "tKBCYwvKZ9sr2Kwpr6vcozjzGnfm1Be6iNPtPdpYD8BqTvjaCd3yg2EvJAhsQcNXyvGdiDQoptce8uzHykbHp7K",
  "key5": "4xz9erN41Edbm56b4Eos8CBJ93fAFVkg1xAAQnHq5ZrEXPYDuLpKpjGnyca3NApjMwqn8c1thMxxiK9ZMuMixmLv",
  "key6": "4c8wjVKetgSDCQRQTcFfPwaqJSKBjjNDbD4H2E54pqEsdceAinYffMqMWdfcMdcmaeu7augS6ph8WwvhXKebWDPW",
  "key7": "3fBqwkhPUuuuuiEGvS5er6gbkYza7TmUjohaFXGZJd76azt15iD9i1j4REVbHVUAoRNMrkkSNPEx9xt1xY7TGmqB",
  "key8": "3ecDFTM4e7tZf1iQEhusam5Xiw79xYXGHj7Ws6eoP2938ixJACrSb98VzUcsSS9XxHKbwycq6Rcz4WKxAeJ38GCN",
  "key9": "5UfwyEVtENrkwaHcXogZ4kR5v1suY91qjDZcH9cBKqLTobrFneQfqEK4RgxriEyzQA4azzrtcv5arcp58xMn7Q13",
  "key10": "2iAcfbYn8DyWTNvPb3TErmkUZ7cGm4sPo2566Ct2PS8H1RWzocLPJe4McY2goYPZkbjDeRN4RL2HerAXZiQmeawD",
  "key11": "2t55MRmtx4ki3HcfCWQBPGZfB7A8nPHACbKiAmSRdsXLMN6Cs3t6UjUpJQz1aqNk6ePwWghwSjoFEvE3npXuEMhg",
  "key12": "oc63DmaA347r3F6jvTZNKvmV9pwaBu7vhuegZwv9axFaAML3gYc39QsvcioGaGhxStPcCMraqdLzMEbMfn2LJRb",
  "key13": "5G2tc8w8tJTM8HtmmCj4tybxg63ZykRCWj2aPPJUN5Z3VXUUdtbvW1J8azo3CfJcf6hB3qXtJRutD9pH4PAedao",
  "key14": "2qLWeYNGpmAkiN4WFyvCrdsxer7Fj15hvHFXeoGXUPVrYARRkMcSFAT71mRPoNxiEY21JcTp1YL2mSRM5ZecmUb9",
  "key15": "2YLTsqpEz8MMN8rEM9rvw924DEd3dNrxSYuc93dMuomCKTD1fFa1HmgEsDd5AsJftck2xBpe6522X5MgqxWeL2g4",
  "key16": "3VuBPnpHax2PosHp1zGhD1pE8azuiGWBtVv3rACFFZ2dbXvD8aGix444w7SV7P2p82vCHFneMyrM7TUnGjvygffq",
  "key17": "3WLHkr7KzeL1ZXKrhsaGHQ1jgMsWoLetEYmbHASXxrjycajgzoYPdrszCkRXwhAGA9LJ83G4ZMnwoHKhDea5KTPM",
  "key18": "mRacLPk1W738mhEC4YoGf1q8cFVEVzk8VmeiwCm4xg8HZ8Tzesr8o3M2ogw9JLZ8D9BjAEELss2DwmweP41tEm7",
  "key19": "3DLfYHcyykNPne2TeJY1NMob5ggzgg8Sj5ZKAsuFxcfcUFcEaApxbndn71AuPSw3YjsvZpHr5V5xSUsFJPV9Kas5",
  "key20": "2Rs2Tz4M4sPx294eTuP56u4uECoXKvFkneCxCLkMZPnxrr8cDWVrExuXFce4qswR3GJtSMZNMfhZSkWtbo9kzBDz",
  "key21": "4Xhmz5UNFwBg3RdG3DzX7jyXMVNRab8hKbUZ7UdyqSN4geYt9822hqzUskBrHUYLeDGfV7o6yV6SqBkdFF1GtJSz",
  "key22": "4c8ycZBTP1yDbsbjFtHTEgqkZPM59LkGHrMEsh1g6GhcLCvhUBCDrgK6TGauYbqRahATY1X3B96CVdFjn5wpM5pL",
  "key23": "67RWgcAzYMRnNkgGraYbbw115KWFbm3UmNy3kXyZ4Fnt73BP8Kw9R7tZb4yXLcw13jV82bSp4J7GcNa8e9cTbiWb",
  "key24": "4E5cfD56vQY6XgZXzrmjWfdHKMzaJPbms8aKqmGqUL1VRmRhGwxRsCsJag9upU5WXAU49sYJPVPHwtJZHcsnBDK5",
  "key25": "5TyXKgeWYm6JpsZTjyXNDoYGXFVDG94egrNspXWu4S9RemQYQHoxYNdLsA1XJhSqZikR1djwKbB8SBrJpKpvVhme",
  "key26": "61PFGhYh19AsVsv7c6c1B8b2tZv8bkvC5di6tSgrM2reyXkemrFrNyQA4HedUyKKAhiCzJiuEXHxLbyf5UE5BHd",
  "key27": "3D7v8xDAngmhRJdkPnr9UL3XzLL7dJRKHL67TJYMhK7Njy86EgBtQ4h3iSgf8cygtcCSuYZ7pcbbZVLipXCuMeNS",
  "key28": "4Bfe6bcwMENRyFfxdufeUGBMdFgh3yhaeRXiKTpzMusACpBfRQcoUiL13hejdXozRXCnwX5VBhiG8DEJqsxjEUPf",
  "key29": "3SsPDWUzaVVzzJ9kSenMkWaQaTnxvUJWkTFjdwHE5kYaXk6D9orLL8i6NZJy6m6np6CajW8dymgDqJ6SiFFVybiR",
  "key30": "5KvvByujfu4ymSq6DprgU9ZPd2rvWmerbNVotixFYTvVKh1RMJoM49HsPviRRsKzZkJjTK8dLgkQ6rbSTYtBPxyf",
  "key31": "4MnooQcW7EjUB5djqTXvThpWxjqGvEPrjSnJmE29jmJ4oTi4hxp3K18soGJUGBtLKxwz1w846fTzDbaKuMc85Ckg",
  "key32": "kQVQqQxs69juh7PYjp6mJj6BSMcfUnD2Skx3t7H6mVFsSiFtfPygHDPVZsV45o9XbMLTqSfa4q6W1vnhtJHF3n4",
  "key33": "63hLoVyqc5rnPKnShfE5L9Ti1bpMYDK87tSKdEQfg1c3BasvsHLq78zgXjT96xAqn6XVoKXqQ2GCRz8KWXkVjmqm"
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
