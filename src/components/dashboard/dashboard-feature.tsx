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
    "4g4rJGtEU7YFep6pm7a4XMKG1QiLF6ovmT8s1r2EZWHegLu36VSm16bBk33cnUb1cvk3SGWsbc6mCKH42CZThKuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23YLrx8e7LmyGHF7wGioL7CdjZmCokMYftq2x9dx15sERptF6aiagFszHwp3nCEi7YLk51gUV6EgBRKdgws3TYK7",
  "key1": "wGqo6AsuG13mAMLsoHTxTb1NjwdF2XMx6dE8NdrvRrUznPQUaJg3xC8njEQGDxZRXbAUEcxy9xqvc7YpAQRjM2u",
  "key2": "dqCXtsHcPiTq2Mst7UvmNQwa23VXmbNySE6WUWMvhXcB1f8ZupESPWyPUj8v19Uyada6gsJ9d6rARtPPGzAp3N9",
  "key3": "kvE6nu1TrhpvkyncYKtamhRJA16iY6JfNCic7VrVdJJJLymz6ZqgVFKTbEbMRXJchZABtQtcvVyRkB3GHcp71fj",
  "key4": "4CVPzQ6RT3ciTNXSUZADrbP4UdbRQm8M1UyBtp4bRRRGWY6iG2JDPPseMdRebuTR4B7bjKZdYUkPMRwUKfCY4JS",
  "key5": "3yag2C1zindPmWntye7np6DH3frGprsQCEajgC4Ft228yAzSwW1yVZ3QDeuG1vy5GccYHv9joLDfot917SqeKMeb",
  "key6": "2VYfLjJEVoT3HepDSiPygV5fCp2b4xjBMifRUzH2V8N7mJ7zDARoUhvgjXyTxX8xH4p41CX79V1HYnq7DnendR26",
  "key7": "HwPBnSCRSdokHLirqabUE2GNp9NLJbbZeyrHzLGMyQ1xiUm9tPE691vBQwVpR61addfkooVaRob2HqM9Y9TXiFr",
  "key8": "2KSFgZUSA3GHiU28yuUimuyTKZUUVRmFC8jedezM9o6zx4kn32GSj1oS15uYAeoyvabNnAuvnSbzVwnWcAjnZFke",
  "key9": "T7xtJYjRyhCsL5ygbVXgAfZyCz7gpq1bdMSuCHb5eMywtSQtbZ8Qo8HC3vsS4waLUbP6jFWswBS4HP5WxFYNt8K",
  "key10": "4vcLKkhQERmtByBp3UoEUMNYvdrRbrfKXHEiXXLb3bxDeRZp7mbAAL4Yf8Duii5Dd1c71ssc7L9PPU1TuHgHSBmi",
  "key11": "4oiTLkG9fQWQzi4uh5Bf8M6rbeyt6HknsfzsCWLTMv6bCH6VoJPELs34joNJUiBhKKv3QpYfsA3Gy1LpXL8YeEV4",
  "key12": "4eYWRrPdwvcoe4AC7w5sLxG1To5K4kpkuDwQFdrVA72ow115Mr53far2AZKp3BQLyuBtmuVit97zNQcZF5tyLCwJ",
  "key13": "3SjxUzBvgvTSSmdK3dbwc65JhDW8xM2uGWkrrjtGex3qqPz5fTA5efL16GbWnC1os7BsJeeNQCUDYuHZ7PfGBzof",
  "key14": "4fVULGgoEACj5DXo1JoGW5jzU3FPdJ7s9s5wjLM2GPHpC2Bh6qJbMJVnW1joGeYJ4yV9xpzxhkU8GfgMYWKG83W1",
  "key15": "53mcJhMHi9svM5LMVBUeTKFnLZG1soVrco52h73SypZvdzsde7GG3s3FcGg34FTYwzXJDF6jYZBVLXst7VCYUg5j",
  "key16": "2ZahHsWLjj9Z2jBU8aAbiacGMK7f5Cw2EkE5w87nvn5e1YZpFVNq5Yjutr8smiuL2HECS3Ww46AHwhyi4nCtnDu4",
  "key17": "2oYqFxxPzQtB1xiGUfNU4MTJqzjvJJ1n7SBpTAJbwb2WsmDHLLV9bQ8Xdbb45PceZHEVMVJ3irZ5cMUQ5YMmVVLm",
  "key18": "2FUDKAerfxqS3KjDzgi3KVhVigqs99sX1t4nhUsaQuyRMnfNmdCPvZUxLeovgMcQm9xCbPMUV9YATEvonkcwJ5JC",
  "key19": "55hWHXo9Fh21fuM7JJ4ptnRgCkZH56is6bxzFr6ivowMtQu48fCpoqARQWMjgy5bpzm54eDFPDzDE1cj4gorkaSH",
  "key20": "2tsRK1n1URhDsrgewuKs6AK1JuGLda9hiUn1rPhMPGdFHT7jhCfsUtTLvriHDbhYMrLft4gFtNpmbC61NvYL2iJH",
  "key21": "RgrQ1wz7NoRnD34HsyhC7pVV48CpjbYUbWmkcV7gLP2tfiy4gBff8VYpp3Wgw2cj3mZ4iULKsoy2AKdU7b7K39T",
  "key22": "5xM81M6gcthyndyUrhfz9i1YR2FXj7f5HFKFSVnWdVxvmgGxwYTxwxwxfVUW2onR3yFZt3cAnDxhoZaVBarrvnCU",
  "key23": "5dcPZHPDrvALEk8dHMSFGCu4xwBZj9ELuYMMtm5cuASvryvcDp14cKzzvHX2n5GMX1Q9px714wMDKv3PBXCXMozW",
  "key24": "NUTKbg51Kg34LpQaenithRVNrPhC57Agexmg5RXsP8fA34wrD2UTEE6GZVueYwoXv5iYJ5pPTDuvctjJ1XJT6fb",
  "key25": "5pVop8HzcxkVVUBQsmp9CtLNWUbKsCiGE69daYSnSEaz7zu7Dmm37eoa3eUay82PpVHK5ANKLGjBoyXzxaF2SZnU",
  "key26": "4e4roqUPFVxSyAQHf5vKcjSvDQ7WrAChTGQs4CzYuTS2ZQTADT6c47ms8kiJD1SqEE9HFNck8AqSwjmJPJoxyLz1",
  "key27": "47hAmpF1Mc5vLbWVS1hARNthEfRxi3VRCNHqmeU68eAMQXEN8c2nNnpxLV5XVkyDgsgsiZ1WE85qL5nDFAPxE7dZ",
  "key28": "5Vbqbw6A7oRhhspbUYtuALkHy7N1peq9HG8UYY8rV6YRef9aoXp1jc1zRYnp7KMdyX431MW56AVwxtx3XRNHWRNH",
  "key29": "5uM59BVgnszqidG3Vd51izkR58SrFmsjxzfrtUAq4QHiELVMUzP5R59v8XJyZEyJbuS865SxcCYiXBH1BPgpK5JR",
  "key30": "4nC2PZSWZcWURynG8zERi1kCBnwCvuccXx8e4PH559cPEAc1Vua3K8JB983sS9XZ5cSVDspax7dnX58vfvPZKfjs",
  "key31": "xETp562KRSgySaNvHEQAdSxMC83BcThe6dJvpq8gLJRKm9k2TSq3JcvvJmneSJ8yrTEsoBk3cKosNodNcBNzjN1",
  "key32": "5v1DEiBZcBQTEu2YcwMJCB2va4QmSWzJRzSQQFsyde11CnxMKQ8JjghPzVyChecj8DTQ9zmcFqWykpWyqxd2i33S",
  "key33": "3tNEjRu2D68146f9dswY6VHRvjqw36DAWqubFsaAcGQxJU4uZQVmmPLgVxBt8vApfpPH2KrQpbyxDjUZzwCAny2t",
  "key34": "5wk8JBCFUiixtTaR3rLT1nS4cSEMaV1yDtHSWnA4c1tyzMpdNtD9dPbk66QKswgaVXAQ3nTDj1Vm4VyJyF43ssMd",
  "key35": "52VZfmMsyZK8BDXMv75gutYJxsnzaC5ojmAQRdiH6wpWLCcRsPDQtfXiH1VFmHCYdMRrSSnTjWrHdH2AU3xJ46iY",
  "key36": "rQ3gfTNEiDyzh4qyKRatKLYDWJHZHPW5DLgt7pDQBDgrvYi2Jt64ibv1H6TVVYmxz9cmEpe2KTVcmASdFH3Rnhm",
  "key37": "4fJmJqsSgEJVrXNyMT2wUkkPDoh8h1jtJ4XAdo5P48DK2jWeAjiEPz4HJVi5WHDkm4NoDUo1UGbaJ6Fa1wKWa7zy",
  "key38": "ZhtPycxACkQVR2UteU3FQCGUuiBb545k7iFzcQVv9qM9cCWfs9bDExuA46oo2HEMSRjXgAiyST3aQvckeCU4tKU",
  "key39": "5nSK1ne2fNwsmcr3msK3dNv3yrVYAX6qTgqaLxWzqGugZYqA2U9cy6HCZDs27fs4vyCJyf5LmUwJ4GzPLHBBseyZ"
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
