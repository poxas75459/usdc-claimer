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
    "5zxyHLwiMBiyAvvkTFtgu1PiU8c1DU1veSpENQKop9rY9gNKsuZbS8DSqLS4LcufBTxzosKyozXoFt1MERDPHoq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhrpHopa4EgpMnm6mQAjCXhZT3GuvUPecn2oCiTTdPwAghkjuFZcL4tKRwrg6Di967brhpW4aiH25PzFvSdDZhu",
  "key1": "28xJypd1k8gcDka8q5vn2bDmdkZaz4wZiL595rE17UdaUYBvxoSFEiYRhHCz9EEpXqjS5quJEkWC6xEvvxHwMNTw",
  "key2": "29JCpt1q6kKaYEP1tfaGGpnpzks7DXr37UoQDDhL1AMTVFDuDX24nLqLGjjGjqEn4pm9UGVa9UNWipdZjwExYJAi",
  "key3": "w3WqKrD2Q8x4fA5RkvqMHXMtUQXDH3rkaQJNEc884n8khwqHhBVPyayn4mn3wRJCdcsuWN6wyH2tZ64w16SrqJ4",
  "key4": "3BubeV3bzjiHSABAv9SXVyVoEH9J5WnCfhWPjQc4LJppynWuB8T9vEYyEXHsXtBtEjoGDzmziCYRFmnawAq28xHH",
  "key5": "5tw4HJ15dnuzmmN1JJYcMV1Wn5HQA4yGfAJTekGkivE3Q9y4qLddAb9xPsvrHcML5JBWVDko2g3Z9VbW1ohkx3JE",
  "key6": "3sBM7PhqBAvQePjUU3CHbXGdqJKpuvMvzpF1Lwoooxq9AGorR6r5zU3WKLpyNZQ1KrS5zGwVop6xfFgdTVnXTmUH",
  "key7": "2P9qZN2GCj7eoHQXr2pFCzoctJajkMzQPUsviScCPCQoTe2aAzEbEyN2SWpeUATkfWW3krtX66MdGjkwsmSB3Qxu",
  "key8": "31PRV6Je5D2qq1sELfNSRypeww8aNGmDHhXFTethXfv6E4BoXfF5yaeVVmn767BWmzhJ14Wothm9rYqJbZqVdPkt",
  "key9": "Kz6rCJvG5rxMM8s5rR3edRnysZgf6hCRQUKhfbV3ABuGhwbGpsjLxHJLGwzJZBsq3FHznZSNaUR9rEL9GtEMvsJ",
  "key10": "63b8fJwqSsUwvJvPzJ1yqweouvuEJEwsKMUa7zjLh6dK4E214MMGaPcGSbTWUuxqutG1gjrv1Z8mkm31GLMkPfsr",
  "key11": "2Q19MGZibBAMkNtdUnkdmu7Cv8DZXYzXA3YrgXcDQeUwR1KYep6mozP1ewn3QhctWYmKxBv6qpfEuCegcUmKo7nb",
  "key12": "64baacwRq96LibR1gmijbD6FY2BqyjsKS5odGLPv1kzVcnR5mJcHSSbFjR1G1H4YCzkNGiBpjkju8vJXRZyAN9EG",
  "key13": "5mv41vUinY6dSREvnXe89v7mParG62Ti76tSvtWhrPRLHuiapbD1DGoBfyhHe9XpgWfYpyHhayFDjhwXFhXzGQ6L",
  "key14": "xjYio1g3RFkrtG3DWMF3oyJzEb7TSEJE1W5tgpj4qcmQcN92P6bSoF4Ljh3C4ZKPHccdRj1rLBkYJgMSAEn1exC",
  "key15": "3iXSyUkuX3g5pSLc4AdURc87rXXmKy9mFxYd5SNYMt38B7tdMay8vun3RvfcSJyuHwcFd7AU1RGWnjpUGV141MLP",
  "key16": "2UTk7VXqj8dkD4fKW1KyRzkEVD4x2vedUyr5JggcbLFAT5zwxHsWYvVyx5RSj6nuZ2ztZGhnFTBcJm6srdhsoExG",
  "key17": "h4J9gNGy1L345qwEdUqzXosGhMzguEHV8cKpM41pWwVAXaGpynoQ52dJPMGqhaDn4XR7SpCVu8CsMAAAZcCLMJ7",
  "key18": "3xPQ6v5wq1DnUsYm998Q6XHrwAeCpdWMsSkG4qtKTuon3wV4wTg2JeJ5BNF9emkgCWSPeHczTPTe3SjiaQD4ETep",
  "key19": "5AWN31h8JtyVaNhVd9iTD1hdKaBAYHV1iH1Sts6m1ut6XABEz6Afede6FqMcbHMvd2hrdRuTbCFAfV7hKsqsBnZa",
  "key20": "3trX3X5rZpFPeN5WhMYGT94W1ea6qCoGta8pJrFc5adAnXEhDfnUGFtsQ3s2mHMg7LczVg5baavLPhKEZVJwRAvY",
  "key21": "572RuXJfF8LsLCbwwjB5a21Tfzy7JLu1UYgXFJZswrJWaQjVAQvSA4CxrzJZzv2dRqYUTuff3LcRbSaEMkRMuB3E",
  "key22": "4T94J8QRYyuoSn6ZUQEWKLsQmLUUQaJycaba9BztjhY1fbpxoQAiLRi4yeZPdJh3V2mJviX6HDZoWU8uB2vL2747",
  "key23": "2r9CBDcFQ86euGF5BqVhu9Q2zYLnGW5YKY5Y3s9XQfrCqwFRxxX4jptzBQ49jGBpG8fxGxcNUbRh8veTXfwhHgv9",
  "key24": "4sM2GDhSbCpatrcyvNjsUkp2RxK7EpBrtnT9v3j99i2rKcyCL9QNeKUzTvcLAEoqjpcPzA2cchNQeRY6hiiNFRN8",
  "key25": "3YicGmV8mtJQRFTqHycvwUqGHWH7bd8mkjt7dgEVBkYDFMwjXqaMZ3cSzTeALP5AAFXzA2FWWVPaJZxT3z7u6hYj",
  "key26": "YcX23v5zTsGFKVS2Y8FEjHZenCPxyo28Bc38SCwkSd5ikQGNH3x65CTvQsFKuUKiyFh16yBbn14DRr57jjFwDRZ",
  "key27": "2njANDhPE2xSnrvosawZUJvWAAA77vcTJs6TSdbxjyswLmnmhuNPfGhhDWrab1HriRExNpUccEVGkD2S5EbxxAC6",
  "key28": "4AdCXymQTpGmbqwmuyTmqQDpj8CpFpBvE8ndG6j4LTwNV1c2XtorApRdPmpioE55VtVaZcK3KHYochvQ72W7treF",
  "key29": "qBhpnRTmZb24FWg6AVoj15g5a9hEMF5N2x5Uze7Za4zMDWe5KFBCi7gmpXHrcQnQtrR6d3yPKhnDKcxHNs9v7TF",
  "key30": "5z6H2Bn5AjKteYpNSdjc6J8ut4Dde5Tdq1wa7FqzoWv6pWdKb3FZAag1waripUDPKhJwNpd1MB6RvhUoGcriNpqV",
  "key31": "2FLiRh24QWrNckHyQUcyPvwzDytQSMrh5BUuJE1LLS2tDvE7kd3QWXvznGNwv6uyYHowtiMsD9v3SD5vYheRFJh8"
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
