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
    "4ZA2b5EkSgvKxyLcMporffEqU13r42fJtHTxrKWFMQx8py4xryJus6uvnr7MWwtBHhWu2hmxJP3G5Kq2K8GYQrqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ja1eWXwSrvcKUfSLBB38cu4gZoX7kJ1fwJQUN36svVERR7bpV4RrQGL6woGA5qLcEPTX7aWYyNwuKEEV3edsfM2",
  "key1": "4gmieTtBgC1F6sLRyoB6Kk9dFKg8ZY6Eor2QN2EE2P5CEH8sE4n2xWYnzDYFW4H7GYjMZKz9CEt9KPy56M8BpUQT",
  "key2": "2AGhNH1HP42RPJymBjXTXKzxcWmPBiy1mokMaSV1StnDEu8jjW6SQ1Bg2L1pmo12fkd534UYAnue96pZ53Z6WFRC",
  "key3": "4dN7W2pPMU5zH3n1uQ9ytFXKKWoww6VPECT3QBsysTSVUhH3jds4A9SP5pMBYLDMXYaJTw56QBorqti6XCJyVrcz",
  "key4": "2PSsBBDySawRvY2bZnPSpruBQPANYevYcwp2PEroMujZYXapqmGy64qB65FPFzugN2ujVsW8sagtoys4ooTRGL3X",
  "key5": "cHorhLTQJMdmiBkgSjEwvmiJkouBvompfvS2PEBTE4rSYmqFke785Cjugm1jdztoD69u6sCpkUf8UEaNtjsTdk2",
  "key6": "2ua9bum4uXrbBQZNapP6VLNvXia9k4pmdyPpnEGJtT2odnpX5gTbwZBK1SR492MN2oDbRAPRFe2kNuRXM2bYA9UF",
  "key7": "2UH9ydoaTUYqYLmMEbTSzKN5Hkg1moZYmt8wixM6oXggNxXd1N8McysnGAxxe5mMzJV7wqhbYZhf37vsozQPEsgg",
  "key8": "64CnTt7CmQwLaWYW2skTFbdhwYbdxQTGYpL13gtAoMLqJmafJH5KWbNE9qEvZk4MWQyTSrEVVuWdb2m9hRvrDspi",
  "key9": "4F9rJ2bpCZVLZom5oBU1SxF18qGDFLPmNKbm7DTfDC5Y4kXHVVS2SrhfmHZQ8QA6ihE1eJ9iSXN9M9fEcZexFyuX",
  "key10": "5r49rsLvz18qb5eu7Qwh2z3yvNqnjuVd6TTNrMGr115gEXJuEEwbD5JzLieP6uJrmhQVLiYSGEj9v4DyEJ8PrsYK",
  "key11": "sbE8wRUYXeRuScuuxHWmXxbwdBDjnEB8pYjxepQtATW1LCf5ZSb2QGDYxenhUoUz92anL9oo9eDmWXVFsha52L7",
  "key12": "LDyg7TwxUJmMP7MbP4bnJbTqbfEqgbGmgBNPNeqe5kwkH8oRn7fPkNTYab7ro8s4LmKZ44GsVwYTjMec26KTDAm",
  "key13": "4bbZCrcDcFGgXtW8YQwxCAmfrrWz5uWmD6ZPDqhXrSPfWRALkCcFuengAWrABN3jfsAdbe8zeke7dP5beTz9B3pX",
  "key14": "3jHUsyVgSXTuWZUyHCC6nac7TmoLa1wpDw2fPZcvcdfpeSXtk8w1zc5j58Kx21hzQFsepUqE8EpppFKFzJYZVpYt",
  "key15": "4z5euZBM1yinX4SdipUEYgLmbJr1ohFpRoN78NBHt2q6fm54dakwxTAMYCZvrFVUeApyov1UtwzEu9s5yDrx5cvq",
  "key16": "3z8RDTbGDhV6QR8F4hZAAqCYmWus1qYT7wJ6qhJk54ZrRHEj3TUWV3tL9idKAfok1H8emnp1ReF729JV9dac8tAT",
  "key17": "dsywAGGuNEpKYAV4nNwCNoQVtV55uAAntvrB8YAwrnJNyikwoEmoewJdwHMztMwkjxGApMrXpUBMk3UBNnU2CJd",
  "key18": "5yuvK6T6aqpBzFxHwANxbtpRG7LKD7fJktHs25zsY391Vk2LW4GbMdqFmDs1BXPvzN5KnkiimFcuCmLSSfsWj9ki",
  "key19": "WtCqWtsHkUFaNETF3FCxJSMC7mST6hqyRbPtA62MEu4Y2B2GHhBJsKetKPpZ97Eg3cbvhVLonnNvEbCrXS9T67j",
  "key20": "2wM233K923Q9yNPpBrS1rD4Ag7XF7Go6FFzLoedjAUtF7FehdA39qXfcwzWDkATgo9txKeJXJevRHBGdsYZG7Dzt",
  "key21": "3GoXCPuCYiEWbBpfTm6pNAL7raVrzLEtpEctW3zaed6AS4ixRzxYVimXQqk9RtCekkUNw8h4fwbamkZHuwHq5iHE",
  "key22": "4NXfaLSzu9rXPwMZ3qVTBHnM8UQNkirGyFFjQ8amcDvFboTktRCkjPyhcJfnBzVb7G8jwRy8eGJs7bXT6AbhXr81",
  "key23": "jQHEXekprmuKu9pNcnPkHMRc8cKQFzHiapbDwbD48yx9M5ydEgkDkNchehwYtCyccoNj1guvsKSZcVRodFdeEea",
  "key24": "6YApU3K5RFBzuaw8cQigXA93pNgmAZQtGDaDar6T3ZuXbXbzt1kg7D2pYRypqq8DSaSEhm5es1aoqPDPvg2z3PT",
  "key25": "4iiVrfk8e3tBU5ksjDNFTg5TS9soHfiotAnZGpyah8mCtwn9d7dneA86vndu8982e8Zn7yxZNpZcodrffR8XMw5E",
  "key26": "3RmEhq3ydhMDAQy2iLH8e49Gz6V35Sk2MRYWNsFQFEj8xuYJGA2XQsJQr7aD8Adwr3fJQdqiaAMFvvPU3zTybxoA",
  "key27": "NBPQt4GPQKQ5GzPR55Y8qL5uS2zvwfutzRDLon6CUVe16NpweRoPxDhJ9bkbPSwrkwdgBjei5zzEeuN8UdLeFYH",
  "key28": "3dzJYBmoEQDKeq6xZzdkeDxxGYRdVP21RE2RLCdnGCWGhgTHn9cb74iCPDFcN1sMLiaBW4WZS4VpbgetCAYWyRse",
  "key29": "V3LXyBqLYJpEWKZSqjJsE6B6erJR3opRBsNKCZqrXhSG2sh5kKaJqHbp9LhvoW3Qhp12Mnen8MR5VT7NdRyj9Fz"
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
