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
    "43xNrwYLkh5hAC1gtLGHvJKy2FKU8wajMTFyzor1jYNeVRh4LupDf9YwQUGG2CxE5uY8FQ82LWuLFeXoQzqmko7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNB4giFXvQJkUrT1vneFtxNckpnYKHRMX6JxZYtori5AwFCPoPEPPk1oG1c9uxWnaqHT9Q4ptoGKVaokYko19iX",
  "key1": "64v5ksDURPzq4mzkTHprHwRbAsiVhuWpWviEAjhkPYhUvUsf5ipfuD2MxuQF5me1FnYCTjpk4Qy3HECWQE76ytMs",
  "key2": "4Gt8GhNZWGrCMay6c2wt1gCtbitBcfqqfoc5riRhmYgd8E1zGGQ1M5CvZ3jMR1adP1VsZtZpQxxMgZ3Pn58bqL2N",
  "key3": "4EqdY8x1yPcwGBo8gD5iKLQsevXvCU6DCx6f82QUTm3VYycfrsLWEZpwPhisM2XTubYoNP6nMUAhkvnzCxUSZaP9",
  "key4": "5gzrjApe1oAZzAYmaaZ2ec9toTakQh4fnPRonMiJMVypYqBv7E8JQZ8XSQ17hMsFBVqEa3jx1EqjM16rWxuQiqw1",
  "key5": "4rU5VujnosWSZZFBGuP8cdNYe4e9TdeNX6LB7Qf9ZR6GwqsSdm7ARWdgScoiLwF5zJtCBRv24K8Ubj5H4oR6EkRZ",
  "key6": "wBjJ8qgBtGPdUSiQphmk1JRETRiW6c5ikChovfbYMZvc3jtsgt2AaoT3Sm2xv6XgaWFT8bKXrowZrkNcSbW5wnQ",
  "key7": "4u3s6CfMeYadVc6PMunqP73CdwA8M9rPEzTuN1WEeDaqyu2ULPEeoMsJxynMiFXy3iiSvLSGQMZvSUV5ucjFKbb6",
  "key8": "2yXwgd8EvSEBXy7gv61rjVKHbCWxgLoMD7dUxoNrpjHmsU7uQzPRAuVSHL9bWhG76cpwMw3GR4W3WCHiBWtFJ3xQ",
  "key9": "5VqFUsdxYWNHyrk6pe7T3QnDVQxMuJdxXtQsioRWFAgvMFyFQLSpNQsaM5BSXhw6Byaka5bntjupqVs8GjhGg6hg",
  "key10": "5M52XT4BQvv23SNq4EKweonyMkVUGXJfSZuP637jqJ2unPaPj3TXPLN7XKur7m7vdkp69WcktfQNTntQ3N57C2dm",
  "key11": "9qiqrW9SGrdgjv1N3Cxp96d8CJnH4x4Y5fDfuNPjKAPLEmCoQ8JMDcmKo5b4yc3Y9ZSEMW2kcoRWp8foFp7YyE4",
  "key12": "1UjHQpToEr251vPPGEMbfSEbqsBZsD2McpNFphiUMdRaHprNBrh5N8yun17DDHv6o5y1RrwyhVa6GCpYhsvT7qj",
  "key13": "5fiYZ5xBqWXQF7ExsZwRhkJfTA34okYSqeQiPUz3oSzQNRzBwi3YL4n49GEsxNwaZ2xig22spKD3XKLFqwU7Cgin",
  "key14": "2aMj6wx5opdiEG1txGw5ArKGTboJym4m2LC5HwPCWXbMXZrjqCKP8HnkoWr1222o7ktZT8bK3vXeKxFxNEGQGGQg",
  "key15": "3WH1RiFiCZgtHZvJrKdEKCV1NdsPrKeTxTCthAQ7LSa14Tj9pdPg68mbh34RnRaSU3B8tQtp68TsAESb5VoAf21k",
  "key16": "4sm2NpSVzEoqDWxVKnRfTtUz6J4ENgriRbRFXYCDjNeCkhktMCZJe3C98GwZEg68NyXkjdj1rMMwr6dJ9j2cZcNa",
  "key17": "3n2CJ2WxVvtsfyYHkrBdWARWuPH6cSeUGwFdPPMZqRcd5DgQfpyMEr1i1VkaMiMVGH6BPPpor4SL7fUe9GKB12Wx",
  "key18": "4vErrPvKRHtkowfCcLPgcMv9XHGnedPyi3vaWuHvM88EQkdAKeFLbHVjbMisnNUZHCyGLnheSt4hgRBuvQFwjiqY",
  "key19": "52oCCGk3DMRHyCg4JTG1nLairkzyygvAiGymQL3fNZrS2FrRUm7Ax9yVebC6rVxTQejibTmZLwhkfj6d9ZjQ6SLm",
  "key20": "27D9aZb96YZBg4w6ercpCohxNSJpFScDm8gHkXCLi6HbVtrt6P88F9MAybEN6h7HfV2QHTjvZHFYaUZbiyCWUNnw",
  "key21": "3MbKutoaEQEvoZj6L2Ampsud3Pk3ixq15GbYtshF8vVpTHeptGnN1tk9vYg2MM6cNp16dY5waNrVgAdpFfUxuGDa",
  "key22": "62456pbMec1L3iQMPLWY4ope1dobxKNDbiNFH58giE5w9U6o92w3dJoyiVxN9UbfHqq22xT9ZAZEF91maswZfAA4",
  "key23": "5is17KFmSfg1rXUgmatKi9CbaDuwxAGff58FvVGazeMELJ1e8CULLh1EQbp8xivWU8wy9z34KmZiYjqUeZsNnqfz",
  "key24": "4q7cL8zSWSrrAJFy2b32ZbLYcKnkKYDoaUAzaYXQa7BLxnn7gdM1imoZR2VfzYGppRr81QkdvnmztHos98XfjN5d",
  "key25": "5UJsowm8KTaZiPuKHsVS3cw5YaCstsZMba9dpVaUqbQ2aF8ZtDLWKUJbCLvpar35QkGdyiXdUijSmiQoty3Ka3t5"
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
