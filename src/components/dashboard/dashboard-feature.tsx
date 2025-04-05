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
    "X1RYEYMkCTaFMHHYEdcwxfx34zkE5fq78MsUfh99RScwQDpFhwuMoa5F188JDK5gdEdUxZngW9Mpg2T52U5wJDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BATvuQQVxDcaxET5LGWa2qKJKgrqL3faKEMJiud4JvaBExeHdyqF3yCQAijfbYqbQ8uxg3Ct1yXcvjvzQB3ph5M",
  "key1": "4QiKfQEBYG3CewfuoYwF1jFym426vCpLmmAPRBK1F9pXSuraEDG29PxCMUmRiXFYRBJat6AUneZFpjCXHMruzdsh",
  "key2": "2QZivf3Te4gtbr6VCktMpvuNiACaTu462KCBXRNEYeSg9m9witwBhRi5MYUi6msG2RGgJkZkLrrDpv7WxX2Z1pvR",
  "key3": "TftTFR5vKro5rPcFCwsEiVBDa3xK1ShxCVVvsaekdqBiFeQDqgsLkUPKRwykHgUFhAGZALE1joYcCNKwvAyDz5C",
  "key4": "2haL74WiPcg6tQ3Towmq29PW9Mu6VaVFJyR4ohRJqYfq3fXEg4Jxyfq6h3JMaSVMqeefRrhiqoGbvxHQnjCWcrNX",
  "key5": "4MQeJ4mH1S6fPHTA59dMba6rxv8xqM27AovB2aMo3EdsVy6ZV8trWBoybqto2WNLV7Yngu3pDDuDZS4XgLvNzBHg",
  "key6": "48VTrfUCXwHypTiraXENrfU3V5qyE72Q6LosNEjRvevCyaX3pmUcj6HJK8KpeXkEna7fN7Vd3bccT1xxuPa1KdLU",
  "key7": "4LgmjUbF2i1smySp2dFruAU4J2dB9nZTvM7t9QCZVELvMb7oymeNwf6qwpgpkXUJwemfQVj6kJ9Gud4RmtoAJxLc",
  "key8": "3rBuqg1SVo6VQp23mQiUHXYFnkc4Xpw4Kxp6XB4uBGDg3AhC9W74N34DJaKzvF4LCzfoEtXscLUqMvTDgJpxVmi5",
  "key9": "3U1WWs2gfKQY9vfcQuVuCdMKBjWdqAogmcNsDJwpaqxG6PMvgdA1yn6QZp7E1mosfjmMpACJa5ojzPQanoTRLc86",
  "key10": "5cvRyLfW4PFNsKS4kdZkitxwA5Fy3ewFT63EBoj7ubvEJYFnYdoddDnpCx8wy1PoE3tvu6rDzVyMsaFpRwNmXUdh",
  "key11": "2rUvmCSKVkEnMTF7SaGHdYrpTWvtoBvD6nUxHGp6DUoJmjPuLmkNLi8Bxcfnmn9W9Vc4hTmH1Q4ttYsHyy5SqpxW",
  "key12": "GCRPj1DpwWprGGpZk1XdeFEAkjoYzPaCSWSEYA62NeKN2FBJkZpmroyvFy5EPvgobyZhhDPop8txAdHUCWWSnrh",
  "key13": "5vNirY8LsMvQPp8NpnD8DGm95z9ug3moqs4vQMPxPYTW4HEzQmQLPR6b5xirfG8CVoVy3fc3ExxNRdE8Z7j2tRLh",
  "key14": "2gqhgwWpdBL1scV2mSUvqTWL6TKPT4DmzLMkoFBwZ1MXJcvtXRVRGLt5D9b11UjYsjce3oGyxm3DtXtwXXzvp4ah",
  "key15": "4TM3VG8GiaX9ipjC4rNgqs2oLsr7iZejNgmrQ2nkd1VY1Q6WGxjfbBsdFPkY2EREVgK9xY71SD7LgD3PNM8LS96X",
  "key16": "2unDdUr5Y5yNseGniA6oS3yNYMvy8DixQNMaLrsbCqgX1Z8e9Enko3MmkVUtcurJrWNmVYEKnkt8wNKmhXPVse3R",
  "key17": "2tufeW6HVmsrmEr5qcwrM9qvXFEupsB9ou4yGeVRBuavRmz9F3MPWiy6CVBfcEa2qD1pNxDTTDLaSw8Dygcpwuru",
  "key18": "2Dmx25oD5VHtcMYs5fPBF6hbAjsxJT2s2rVjxJos8pRNaaekYvx8aYMZuB4qwMnh1CSABn6iLmsyE65a78hPX7AP",
  "key19": "EmF5m1tyiDNf1Si1UDYbGEd39747iubPGCfwb8vWh1FbG3h5QdxEtyG5DeDhCprrbbSaLpUV9UyPhmZfpb6MWQR",
  "key20": "3NftR3zEK1uHsgANfteJ6pjuP9X54MzcUuhQu5sxV6b9JXYUCugNfALyC4nKnqjkfavbpsqRa8T4hTPM8T5LTbvA",
  "key21": "2p8pcvKz24wKoCqH63Skziu4hj9m5LFfi7RyMrrCfGE5TMC1Gk8xprbDjpRsMVXxvtJYcvryZJT5tS6VKbBzK9KQ",
  "key22": "5eXMDNyp1iAFyp7sFKRPnHVKVYxyz5hKXJBYZXcEdxT25NALZG27eJsfwstLnfGMkoMWNvS8HJpP2CTLu6pauo8r",
  "key23": "5ca2VmhQpnFaCXPAHyUz7zaWugd3fjXj9GH3BkC5cYCcPfz8GWVbku44BGc1fSeYidBPHqtaFeY6mNH9YzmvoWnt",
  "key24": "53nCDzYP4T2WWc11oirzu8oDQYGGqBnLkpb1yoEnnWmiGmcCvMrsLB6Fhn68yBo7VqUxX4wmuENHnkpsyA8GZCq5",
  "key25": "56NR5hTR35F2cphR7TL3qvYNfHu4yXsnWH3hHSy91Q5V971Brps5hTUtfgUVRhCrpRyMwZ669FaRDeBFozB2xQBB",
  "key26": "35N11tbFJxKBQNhy92cKSSqStmVipDjj26GhUzMhKRJXMeJcgJVPKadfJmmZvJW87trDgPHgtLQCJxoRSNabVXYH",
  "key27": "5qqqJrmSdM8z7PDGxdbSJHAXVdtWcUrDWYJSCgz9VPZRageSFhBYAi7UaxLtF4odgAMMPawL4PbnBhXN3Niwxe6k",
  "key28": "5D39vAW2xSa5D2EGNQAD7xYL55UFgciyoH85H5af8JS5mJQhtigExC7xwWWP8YfV1oVfQGoPAsk1K2RTSDnzuwaj",
  "key29": "4RszuZXkPK5pEh8ZsyS8xFcB5ty1bLJSg9pGFcH6iygBdMV7Zcqc6f9vqSv3p4ATRNY1yjnjSV7Z28SjcLFaoP8Z",
  "key30": "hqHAypmynBt9Hq31kQbecyKmaVoFt1ak6bDJG5RH6CQWq2psDkTg4BxN48YV9KNqhBKRP6kC8tFd62TatKWrSSb",
  "key31": "4zjbShwX4kPMXVV6L7ZrZDYCDe61c87NQQL4ZvSbqUcnHx187fKry7cTa7qtSpQUynEkG5CLtKs48ssKWTHyETuE",
  "key32": "VzoG6QMWccLzrthEYTYj1Ryqswb43vUJNnaGwcbcMJ6DeAhvsAEoaGmVK7t8L587G8tL1Q5u4qkDrxZpy1yGwTU",
  "key33": "2appM8aYtQax35MbE4i7PQWTHNHjrZy8jgtNkHigLQvopT43fUVAAsHntV2mBtZfMF7dn4AFhtnXwyrNgAX3Btac"
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
