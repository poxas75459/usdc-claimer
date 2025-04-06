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
    "5NRZTmRCxwnSiYfMNf3kpwgX4KgektFAH5wu2irU7TaeHxn791jyepqeecGtQG2aLxkNvTLaXSZ3ygqMwjtPQGtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jDX765HeVRPpj9FXWzLPgsKo3hGNdAxa83teu4mV3eH2oyiudATE2SxiGEAbRaKQJ1Gm6KuvEZTjS4ET1n4uRP",
  "key1": "FPfiMDr7GVGF6DMbU46tfGUsEJNed5CPubQqGdoRaAn3eEzN5f1Gz84sftdBh88avLWJpeorU7ALVoa6ks3tqY2",
  "key2": "tS5unFR5TWBGqvQ1cAobmonhEY1FozpJBRPvT7fRywEUuJFGWmg3M1gyQ8vscmcdwQSu3o9C6qXB3LisJZCq1yj",
  "key3": "5psH3rTwVANjyi2kUvE1Wm9ZuYEbyL9wCndH5aabtrohc7oNP94KVZVWegkTSeJTXZMJAosxRxCybQeQq92o5UJb",
  "key4": "4xouUUx2KjTSyVnHPadJMumjFfUGXG3znSuYyfZfCVHzYRJ7w1yurAbJWck4A2GFRfV4pdmJpHyHDGZcYCYuBZWL",
  "key5": "35g5j4Mj6JNAcR1LbmvgYtMyzQD3AVEcD9xzFFXX1ZvED3z2244vwX3FdXGzvYqKFJQ4vKqFJgw8ueUxn6Wo7Hmj",
  "key6": "hZivsN3vtLDKTBUuNJvNNdLqCZ7fC5Z2XA3tC4Mo5cq8mPBFvJuX26XHhFDotEdp5unwpdr9bmZkSeBuMmMfTiD",
  "key7": "2NJEPLkoPhBnuvJhoC3KfSEmDR6mTkrkDWk28PLfXk1xMfmrYdeujGXT16LdPz8AMFnr9SxoNDN2nerxZuRyyXkN",
  "key8": "2H965pnrhLcBAKmdQVBUwvDN6uonUEqiPj9Kh6wxbVUCY9kq4QSjmkGRntBjiSyj8PXfp2ECXAvx8jZ66d63G7D3",
  "key9": "6uAAe4Hh1SetRM2BmLNdG1GkTH3cKQUkMZEUwq5GzFMhq5LgHbSyzudh375faedKXFmhERM1tCks8QNAHAAJ5q7",
  "key10": "5jf69nrNuCLCPeEka72UDiiTNLfCNZ7Lj2NEGLnPSe4qLfd7CpxfDLjonQd53jsp9qTQpYAxqeMqHsJm8QqMsDbJ",
  "key11": "Tx7qkiR9U4QbBqKAtBkA7EssQigD4kDwSsvqd3y3Vj8Eqe5sw3jTKQK5pSDo1QcaDSETuQ4RaVQruM1uWf9rM7N",
  "key12": "4Wv4T3XBy4PXCKNxVQXzgzx7QDDnjexnU9G2Mj5n1QRJe1wE7mdPNGNa7oki9Dn6dnZD8QuQwpenxaAC8TiK3Tjg",
  "key13": "3g3m2XH7rY35WYYqprZsPi7DzfZsFBZACuogoGjdj78fijR19LDvh3wkqc7cajfXGA5mhkiuZgS6WY3v2Bp8Kku4",
  "key14": "5dwQhrL49tEwhqn97xus4YiM9xAv4rbLZhXWsKBRKMZ2gk694AUfEtwd6w7PPs8C8MyaKx2J4CGgKeMhN51RKyMt",
  "key15": "27pHsXmYs81pMhSHUzmKYrRey2Lyv1khvpqq9PEEHoGoY2rSgPuLAKyabP6Qn7jEn3FHYK41T3KUczY4mbBwMRWo",
  "key16": "21iPpKNavGXtTaMqYjET68JRXqVj7S3ij9DMBzvQXr8xAvKtWmQG1qPnbJapBbMCFSVSUJuGrnGGW6VUtfjAXRgF",
  "key17": "357GxwM2Dcbe89MrcEry5RH3PtTHDxBWJpetDpZ9tNEfaJVGDWMfjaYh8D6fTxUtGndL7prBGHuKd6FQpxJW1AeK",
  "key18": "27H6wo4i7suxSC5FNmZZvhSdQVooacsVpbdshWdCdNfxaLEmEaoSMK5iR7PPxPARmnBDD8DJ375PWP9LPUqCRchx",
  "key19": "5cbJp7onXP5VV9LL2sV2VKvf6sGDrdZt2pwT2CSwCY68gY1wxeJX8N47RSyq11SdbNfwVFtEVRVP4JbtRa2H3zQx",
  "key20": "2ubj6NeqhhzZSFXwBeFAU1oq2vAVZq4KDRA34B38zEEA3jaxCLUjgSX3qkEM7EVeTz8rKLN1SuV4Q6vXHfwDy4QF",
  "key21": "2KWG6pnFRPEf8WtfuVzxwKXonr9EAU2cxAARN2HK4jVeRW6mNqc3gi6Mj8CKRYrVXqQxoqtuEyhpY8tjNxaHzkDB",
  "key22": "3iauNjjoraNiFwEe65hzQ38GaGJjvaBipbVR5gwDMRA1Z7N8GYvdRh4VmUCvnuRqBpv1txctE1Pq32k8jtEanPRL",
  "key23": "5va3Krn2DKaEGLoCBUMUkeZPXSM85FW4VZd319ScB15NJ6ofTpRtofetsPvfB5omv1SBHJZMCPogREPxccsw2rWy",
  "key24": "2zhu13gSxpS4JhNvhzuuszNgyANhkg6e7rUyTtJAVJSCchUnLmofj9ECNQEY4nPGpBkn274t63mXz8QQQbArJnxB",
  "key25": "55AYLvtqdomXBWW3fCEvSvaUu6Ty8t2QcdvLaZjKcZ1A43kxZjRc1XDtXVMjKXNj8ZendKzFqEVPcFriPNetrmh8",
  "key26": "eh4Y5PL8dHm3X3N8srzLRm9kBGP2xZE2TKLbmuXwyQ6vK8wfpy8tKj5i8ho8pvDV6EemZsf1PeQzjtXYrLNzViV",
  "key27": "VhrSmdVrSwK3RgGcs3XU4HfAGWS1UdJyee1FbT6nwzotypA7UNP21WfRwbJz3VWHYTDFUoMkpHMbzRLuUpN5W5z",
  "key28": "2UEfsrwTrNQDEfXYoPB629txuGg3oziK8ZWaARZftoWsRBmFfWwryb5YDte1npn32yCBQAeSniLP844bge4BRihU",
  "key29": "4zTVCyg1DFz6trdJhgfSD87gi4MNpM8vgHGWiMEtVxssUMv2uJnqP51gtkZnTq4TeMXUW6aVuyuU9qXFgxzsSYDA",
  "key30": "5R3H6YKSWthqaVpokgBU1ZfzHdSV73WYDB1bYmF9iTKHZtt5EHr7HzpueZeFvsRA3meqEBGSm5UTV8fJf7cQD4Ss",
  "key31": "5LqyssDtyLADiYUweesg7WdMm5KJamkjohWMdpcjj1H9eYrXZb1KA5eSBCscbpkhrfbNJS5oos6qEFscDM7b2obH"
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
