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
    "2iB6ztujrTuyLkpCxM2tKs6fXRcKXWVkJ5QhLbKVZbWyBmZHsgzkZX7XL2p8t19sjJ5pr8B6TvusvktW3QQCWLft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aauJ9F6nUJaBWUjUFGXbSEbJqD4J5crD7DxVTZjKbZDPAgtWDRftKMkc58ft9VKPAMSvPzYQbBfmCPxUoeMYZqY",
  "key1": "3cBeq1ZRvWq6SGvuEKydcCxSrX2PX759djWhMbpXXDSUJE7kCZDK8nPNzDYRraVkHinbko7hGJRAqAcMEBYwuVzr",
  "key2": "39Q1fUAKfMdai7QmMdMcb6NyTkuta9vu3Eisy4MDKdXr4hgkpihBot4N6AcrQZd1x66CQk6bwRVYz6rLhVc8UuA5",
  "key3": "3pYQdh3wKfKT9NHJyCahYecX4r3EfxmvDWfU7af2FtHsUWRtxAgyrdXwRy883HkCzVQsybVG2e5RmQzgjg9ejrB9",
  "key4": "4Xn1ei3Yw9XFpHrmTycWSZQ82ZS3NqnE1rL7DgdsAza2Y3WJzn8hex3WqRgsqKc3QXS882sXzPUFdbwuuYwmFzA",
  "key5": "2hqryD74hvjAmFKfKwZBr22JRGPQ7iNSBUb5x82M7SkzxoToqhVxtpoMpkFQb9hXvnPbcPi5pvhu7RRKaAPm7BSo",
  "key6": "5QyE2C6ko4SbVb53JatTkQY8y4N5fMp6wp6Vmd9dbXYBnZ7tDXsyDUWaEXuDqojExVR1E2u3xE9jRaia3EgRq1zF",
  "key7": "a93Jtvw4P1phK3Ejkij6MsgSsYjixySydBHmvgUw22ZuUmQHZcPsD1gsN3qhHKfRCpMACKUr81equhQiKFQKUFL",
  "key8": "56jx9AKZUUKVWvgcpenENezMTDRiCr9dR6f7HSesSKGUSCkwLEBMVe8axhWM54MgkBFoeR7M4ojDudhe5mdwnZo2",
  "key9": "3C9PfFmQQhxvswxvap4AUUgGPwibeV7ansQeojAh6D8VxAZ5DVYz1K8vHawAStVbuf5ciTKpx8nmpBciDjvjfLb8",
  "key10": "4MG91WLsNpV3oBRYKBdExgBfoqepEjXGY6joAw4QF6NdivBe6mhWEYH1UnHcAGLekJ161mC2k7V1FWCqBGf2JtWz",
  "key11": "4F1Q5x7ToGfQZTRFViirZPeDNv3DWAfVfWTcPLSCQmNYrpp3wLyk6BUwY1LFeSMs8kZ3NKpkgz4ApHvwovtdtGnk",
  "key12": "22aWbC1zFLRqQg5CfyBtoDx98u6VJUJDkMwB39UQiAzna3nFTVQRLim9rrwXBwQKmJ87fWXMizTtPy7Jmkty3GST",
  "key13": "4Gej8NLCU9gaVvarm3cETSbJ7bAvxEYZ75RYkSD9R4Vn7dZhNQeb88WVwDzZUiq7sFBHkwqD7mzeFKTsX6MxkYR6",
  "key14": "377CMmspvRsGAQpF2epEYDTsbX1VnTQyNL7RzsUNqNfxWjCBjSw8PkP9p5222Upwacx44AoFmK5XGxexs8c3Fu1K",
  "key15": "4x6oJ9vHZ8sxkwLHAgMtZ63wmU9ezcU6L9VbReb8YCPyzGCZYjaPBMMKtGqDPZsPKPgzzuEVkKaay4KeJb661pER",
  "key16": "2RqT1zP2rhrMh2412YtvnaDcCwdDsVa5e2K6TVMzEUytj49oLkX1GFWgVg384Uewwc6qkcwfVeNDf9mxM2FndcgY",
  "key17": "41Ebu2LcBCPa7AE5T9YE6xMDhLEfnaWjpCF1X8b2GHsxYu29kePKjSGXFtcH2ZngQkbB3z3kxsxeJtbFeD73kWLt",
  "key18": "3uYYLDeg3VYzRzgP16GVj9sPaa3DYEPTAm1SEcspwessKVsozEjzXjqCMzAonNu6qQ28SPArjv2JYfUW7DvJprGY",
  "key19": "rB3VtJxP9dx3cwKC27vW6DiA86VoZfB6ptN9LbTYyJKzZVpeDWKuLKjQEMdy7uUvK7Yt2fDAHrWwtBi54E1o1eV",
  "key20": "3HWRhssY9FLyNG3TEAb3GCTyxqCA9cqycZpLYNVu48ZvvJt58C8SGf7ofWmSiHgmhfeqHX3a35MJA7WoBMvEnprP",
  "key21": "59pUqCReLZeXjzB6Sbp6UTXb19magaGQjUHMC5QsN8pfHHh1VR523MoqruFG8aNSMtjGk4WmtVrhzXshPE6n4GCY",
  "key22": "PwkqmmPeJm5ED1sHLiPiG3KafNmKL6RQuKr6txLTcqanfeSxzsGQTpBUTjrhStjCsvqJMSv7yUt2bRKd62SE7QR",
  "key23": "56ej9LHBAc8zL2bzSYoSZAMJTRk812fhmXT37CsaZZbYXCSqHsfweeEhLGx8bgXknFmWCTjNXrqccMfTEkLwT3ZP",
  "key24": "FUo2XVhP2L9n7NQDyg5akxZ7WrzksU2qhvuTbW8muc1Rf7JZKTf7PDFxE11ioPmnkqx3YrBHBbXWCqVoY9puURk",
  "key25": "4SQTsLPw2aXnnC71LqdwXmQQGUv9ZVqct2juzbBH8smsw1p9WcFUJCyrewmQ86DNMF5XnU9mnUoEB8zVShMDsrZX",
  "key26": "38xyURLai9D3eeEFJ4x5Mr68bNgpR7QmTMAcQiNJ81x1XCzfQbCE1XuztSAixapFYgiES4LigyDwnsoW53hF5s1J",
  "key27": "51pktRseym2XRm3G3h7k4QGE8GdSf9r7jdkSiVi5etp386zFk3dMqbjdNUv282Z5usDwdF9xf3nhQDQxMDd1hnWw",
  "key28": "4tRiX3QEGtq7DYXJPzVmp4y4besj4EBhTdSPW3Vmf7BXrip4sbfoV5oyLCfSVjAM26vaFQYpzdQ4fSeiZH8sLs35",
  "key29": "5QYuNkrQUuBiWyR5fEJUMsbkLoSFUKCtc65v4WwmbEAqt4RpoBrw8JJTeCEmQZNaxbP3bDg8Fycsh3mJffdBbgak",
  "key30": "53qGhssFGgdS7TyjQGjWq3vQhE3YmuhhwHhnvwMntfpFdVFAX62Yn8XuiSygU69wRGXsEmNCNykKhmr4Prazhm2E",
  "key31": "5iubLqmu1Z6dLREg5TYmKuwZv1DkQTymBNNMdXfa9fnPP6WvVgz5aVuxus3FKJ6E1xcAxLQpMC1UUsvbvkvToRVx",
  "key32": "jAvFLfzb1HERcBFyZLb4Y4m4ge7rgWSkwHVZFRaeQkqSD9t7SFez2bifTMKwA5Gug11PB1petwa9ziHxEJgMosQ",
  "key33": "5oqogCCdZyQjUK9vpSeWdLKogEEGF71xgPVULKkuvS8uY7S4bQ5TUmBGWvPkaZH55YNFMPrrh1uKyg1jiC6csUzm",
  "key34": "2DgLnnP2yB4UL4qEALpz6MmE2Av4xz2rKDMgWYfCK8hd5ARiLkpaacrYF9TfK6ogC1eoTerGkchWPVytvKgQ7aqm",
  "key35": "2gSRsu5X8wdThBsp2kHrhTMftoXkXEy4gbvXaz8YTSgnbUVC9xXVVZxQp5W26P34LcWpRVAtQEnK6cmLuBQv842Q",
  "key36": "6RJvX9L4vxE2PKLGyBALwZpjtWzhzRiAFFb1QUTyEZYLQDthCJoDPhvGfwdR6rhArj1zFPJfPKwofZzhnW5ccAF",
  "key37": "2qucknrGguabTat3eQj9UrRZ5BomNRkk1TFNDbh4Q7uhow34HVxdSTCpoEwh9vyYyFeFjXmpz873Gfc9m8Hp5XFu",
  "key38": "HQUdaHjJybceRMfZT1m5d6MhDBoNdFECkNEBavpkcKuRAhkbb9bAqbLdd1AALyeKebNsbW7cZRYoc3imGZ42eps"
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
