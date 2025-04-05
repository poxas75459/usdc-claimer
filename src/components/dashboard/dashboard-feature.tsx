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
    "5n2cY8vGxSqFz3CH7uxxRqJnoYCCFYGRbaUo6thkZNXMEj52ht1NK642ngXhuj5boARsGv7CJgFCxzfdA4e9RHXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xS36sa8rpdg8bnkahNbCbZPbadZqUGxCH9urZKzQ9FkwskAUDeLEaSCsQe2qkY2Rf6TyFvzR2LRckX38ydtoRsc",
  "key1": "4XvT2qVnqmPkBBk65XD6ZBSEQ4c5YD1v3F52GXNtW1aoWPpiBuFop9rgojqTNwAWeBHmG1iB5JVyb8xPehPKQCMX",
  "key2": "4G4HFo66pd2TNGwuUPhwzh82xaM2JH4q63JwtCzQ7yhdGdmiKcDjerwde9Guw2P5Ac7k1n4Pafeoc4R7ioGZJvqZ",
  "key3": "4VyBQeAgrpaLHbfmmVnC34wd8DZpJH31JEkRCF2FXsBoY23z5ZDx2915PxPTLwqgyUfexpofCtD7Vwwk5Fc8V5FS",
  "key4": "2kgdh67MbsReNKrH7RnRhGzeTP7uuby3hAXn8DNRDnUcmXzTGKsDHLfdwyzExxmDsFZG1jk6PHXVuAe1t4w6Bhga",
  "key5": "2hxispwK58skcEXCfJDr826A4YHAEdyM8maCNYLkzkfierQwrdZd6mL5HKK3iWKAFjHJwEYd4ugg36DyGjBYXn94",
  "key6": "5PFVLCm9goUHpq88LicScxmHoTRbPGTLgrWLVAYK6jg3adzXPFQmwMNTrdd1LMoxBH1Qkm4vqJPP1zTg98TchWfP",
  "key7": "313BZ8ntQa6n6PHsg92YewkU3nRUakZ4PMXLcqKDgGDiHZs5qk3ehxDCjSeJ2256WLTHhbpCbJjegfWSw8LnW5zH",
  "key8": "2ng2m7ndH3KG1ofqihbbEAVy7KgrBEZFSTZnsj4JpmrwKGhvJKSLfbjsdYH7Put6QtsMHeMTguh8RTjyP3fdAHby",
  "key9": "vXnvCP9FqhepHxkrT1NRpmJ9q2FQUUpiEhNE9EbxuxcuQ7VE1tf1U7oh2uNbcaFymdotcN6LCeuzz36GVKFDzqw",
  "key10": "3Mo4cizXSApNmtwiLzN48NoL5Dh875GKS6MaVKDEaJs2UCT1BWK75GTj16NixVpSCgR2ywDPAcayCTngmwjwwun1",
  "key11": "86NFQkjHfus77ohk7xmk2Emqv1y4JLhG3FZ8S7SsNNV8iCya7DFei5HzSpgdicUBj9uWtEr795GR5yqdp5y9L5Q",
  "key12": "4caaNx8sMqWQN2vm6RnraTvBXGUxKsjdA9UdPDehn6oNBmPE8K6aWfDH99uG5yXhtsqCTeY6MP6dBULn2Y5zZsES",
  "key13": "4gVHZEE6FEv3jpY2Jqf9eKXpatU8AmNEC31T2Btnxihbiuj6iaGDxafRoKgpnrKGJnA5kobF5MmogRgSKF4RhPL4",
  "key14": "5ZyUpYAXg9W4DFngPkmdfeXHvj7gMytLHCCYeivWyk98MNPS3UvCVBo68DQ3XttJuxH3xr3GyNzBYdWBL3zptLst",
  "key15": "2XjDvDZxE32Pab6UnHDwiov6HuCMftTg6ZsgLkBJRWeLDTamBJWWmMvo1mweYXRjxhj4E8cnTWi1ZeRVijRRamK3",
  "key16": "3GTqDxTwrF6eeEwmF31qDsLJ55wksZb3oYkeTUcLgEGAjtH7yzanMJgp5mWv7xGSx3opNr9BTerfBkJqxvAu5vNq",
  "key17": "5978js9mkseXyWrNgCkkNcYTynGjKjujdMiHw1r1oChk7nJyzXxB3T9ZuDa2BgaSnRqvuPar1K8dfYoZ3FqWJrR",
  "key18": "3uxTF2XgzCppiQk9Ygs2mgDmWv7k5BMEcidfnw1MMdT8Ge8G8zEqXeM2eSSjyhNQ4BwE2zqs1K8F4pkGDphQCVc3",
  "key19": "4zkNFSjcH7o81k2XtsuyRpW8q2QxgcJDk4VgxvdnnnozcGRRWPQ9tgj8ms1HKFf7x5UHxDsX5CzUdk6zxfZ1PnHq",
  "key20": "oojKKbeuveYzrTWuuQ15BGuWuAberhJRENhecvuZMfBzERbByfqWSu1mURMoTwv5BiAPjVEKDHBLpCwAbwTeGz2",
  "key21": "55PFRBGqZ69HrRDUFucRpdTTqkn8LUQdY6XV3K5qMUc2gH8vnus2b1Mc47EeCWpNno3vcjHmwPd3sGxdb7Jfcjx9",
  "key22": "24Beitc89Xd5ggEy6ESsiTntmQGa9nyQJSuoaPwvjZ4xJpkysCKbNdXxwHx8heDmanbs5FF76r3SpADx5fT3zV4D",
  "key23": "2qfzDTUCfazwy7viDNYY2L4NT9HS3a6kGnrnH5ip3r67e8D6HpxmYkvBUE2Zak9Agx8rxcz5UTCCkM5pYjoymfXm",
  "key24": "2vkQSh6dsHFRcEeY5n5hYTZpAJ1igksrgxgU5HzmW5q41rRD4UtyZRb9UDmHup48NbAkwizwmj7DWJh8Z7thCqeW",
  "key25": "Eiga2dzyvXuTzTjNAmVE9XQWA1XVm5KRikdFtGL65jga4nqXFt6dj4CrG27Md7grduo6ABjh9ePBALtsM1gBgdQ",
  "key26": "648P4VtcRKw1uJsfHYXdLSiihodceKvetXrgPpTLyQXevs4YCdH3fDVbHZZJRPjkLJfhnVEBHVkeJn2VXYUshhUK",
  "key27": "o9Bnr9c25oQJ1M31D2oPQyABCgm52Dh83WQGyyLhu4G5zxJ2S7EJU8KnXay9FxARKiR1cACSMJKxadLiiyvRosK",
  "key28": "5pi9Hkn9SHmLs3CxTpb87AG3BC1Xo1famWPE4X591TD7UP5Ki5j8FoQB37eTvqmRfgGvUcFBPuof8ZErsx4RqZsP",
  "key29": "2qQiTieYc8yF3GhLSGRY2aQQNGDY7VhFvia74RNzNdTSFwgD23oercuh1sj2r7UqDj6ERmXUcLX3RxeaHqp6nVW3",
  "key30": "2kiwbD7htUxUw7k1FHe8u9ysQqnrxA6LLeFMZkkLugHz69VRbnKhyU5bK4bRfxEVpxWgtf14vXNxYXRxrpr5DM3P",
  "key31": "2NQJEBmpnuYaZJafDEjpriH3oepNtda1TmroV84HQgDmeYYjmw8kkzFpCTdVKpxw8dWNuHc3aykVL2B2pjZvT9Au",
  "key32": "5kp937hCwWdixnDDP2TErSnfJArzESiXxHbehLsNZGmfku4HYsMaruAX8tCRxDFcbP939EPGA4D3h32T83qxY3To",
  "key33": "2nUwwavzpLPWyFLqbaiFh4fU7ises4YnLpiNtbgbNNxM2dWdEtmqtzeryKnLom6RPCCyi9QnWoCgi3XWTPA4g1ym",
  "key34": "2D1dCUbPY7pDsfZA8YqR8oauvXRpX7KxpRMmSxzGxRyKqe3bqZGDigGzLCeteKtdCjeMAgBSqcPA1Ri3mCBBjovj",
  "key35": "4Fxf9RyFYswW2en2EGUQJjAUGAJSVbtKAvBXRGJq31rRQjWMbSaSNqysnLgTg5NDhp4YfEBGjJdvAq63v3NZv4Dp",
  "key36": "4SBQ8WUYj4mbaMSWAqv9NqsB1BWhp61nFd83UUUPWLpmdyZYdrzqhod4VXnqvzPjaPcALKXYoqL5ycNjuC2R1AhE",
  "key37": "2v6dMR7sASrjdGmXCb624DoHLY3SXuLh9xyPhXrn6vQyzDaHKJbAHDTRauNxatTGhBr3uVESMFptP2k6HztMENW3",
  "key38": "53AgbBUBo13dXeMJAWJkiV6JtHB5TbFYZ1UuBb8uqUpJfQTvPX8zSuxg2KpfJyPaH5PYdB1jZ7kSM6mxMnQ2FkdV",
  "key39": "2v4eg6nt8mQ5sqXVC7CEBfewxnnBoCFEyVqoWxjBtWCDFWtyLetvtdKa7Ux38bUVgELHHJQiLuqt96aicaRC7EdB",
  "key40": "4YArzVFLm4nEbceLTbm9ZkZnTUfb8oDM6D1paddryyNNZMkRUZuCP3VyCRzvreuXpbQvhECEppMDo7vTLtUDDUkT",
  "key41": "EaPhs8azsUuTvGdkezb4M54Vqg1TSifpWbd2ZaHWVfB1qZWRMLjJi1xGzs1Tuv9e44JxRPtF7C4ZtgC7TktcHek",
  "key42": "3U6PL3oZNw7q6k5Qxhc1cth5MFMUjAnR6fxKmXSpeA7iY4ZMP6wNe2Joo5MWrdkQkHmcfNkZErrfrNycXjDEJW8u",
  "key43": "5GDzqesQULekuYG6oq4w2ufU9cirFEnPBBPY3xPvfuFYesgjgewHB8uYjJwhLty6pNoEPZxY4aFsmXqRKSiBQ4xJ"
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
