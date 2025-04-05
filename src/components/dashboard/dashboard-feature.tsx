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
    "5rCdEKx3tmbgsxUzh8iWK95L1HAvMcwtAr63yRdad4jqzyJY1Qec2uMVWkAcCkuDQnkd7qGbjjqTo9awKYKvutjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkNVh5TxcWSbj9KqWnS5ufq7t3dJ8Lk1R9JkTi6pecPsz93eaosUz6Bgm83eALwQ8T2yJPtqQrvQs7y9T2s781L",
  "key1": "5vwXEKAWUMH4RZtVgduxgsJyMCusUqHjBShEzGRFZQzqWZ9tPHbjXWu34eBoRvUstEs3ADfXU1P4xvqCRLUe31kF",
  "key2": "3fAZQ5Si2gH9He9ho9sf9gAHi6GDTcGBdRWVrTPbpMUfmZsLtxbaeJJeVNCbc2mV4xxK3ZyrL5nkFd7Q5Wcp8a4R",
  "key3": "3huENvxLHo528AGHXn1hSnD3R3bDqvfPDaJEMh4p9iTfT2nbwHkJr1p8erRWp6Lsd1FXGMpjEmogXmVRe939Ws6a",
  "key4": "5wFshuvRn55JhdkjM6B8U4XGW9mCJqL41owozvvCBSxk6cc2WATTXtt5eWD3VzA1y9qKuS1vCUGpDksdAnwvjC7h",
  "key5": "3UcuZGSY5PedJShbjrd8qyyKESUy8vHgcruDT2kJCYc1rBpb1mjiAHxM88PXFPqVkbVfVZ3qunENFoRJj1fpzTKg",
  "key6": "4CkHwb5fNKYG9cVJHL2BC2o4w39LPZ4UbnptFhFxmGj9Y4SZvNo7G6sb4Cyj4UrmG16V5G8VNYeo55jvMVN9rwW3",
  "key7": "43sCD4XrnGFwgtsiQKMM9XzB5AV2MGe5A6trnBouvrpCNF685Z4vxgX3KsDk8L6626iVNeKUy98zugfjwLxUxYmw",
  "key8": "45r3V3zYTsNcSfhFdDDcenemFRx7cKxbQxg25mbHPxeYPNp2AVQvy2gqZGTvpoKhCoJTTHzQp4Uge6sVZV1j2M3z",
  "key9": "5jQX5yCVJLNnwofgScuKfq1PY6EDgZicegmjQaPcz7gAug57HVzUPrsBBNifqsoJzpBtvqDkRvqQY7NcLqkCyuGs",
  "key10": "4p8smm319DRHtdsMfnf6g5rBc4X3UcC5Jjd7Laocw6EYjUrtzvkLk8X9SjRNEA4zNVVd9HiuSciWFzcVXYkqf1FY",
  "key11": "MUKNSsv1B5wBMtkaqjnjhhDCRn5TdhMSjwhbn1TyxfU4HUQ9fvwPqz4ZMRo7NMY2eng2V9baq5DfQCXVWXBhdAM",
  "key12": "3NkcZAPpZSh1iJuj2K4Ws1D8STNGoYFBdXQ5hL9R9Jxa9HVR4idbsZxDuvfaserJyCyXDZkHCtKYW7NXFoDCx3iJ",
  "key13": "4YabyyNctWECtYrnn5gqQTPDRt1SpAkEu7zvSC1q4AY1U2G33Cn5cJnJhVxXTw1y3mb9yk2X2yDh9QCAudtP34G3",
  "key14": "27XdCN5kM85ZcXL6cxx2KEtfiJd9fr7FjQURhyG3Cn6wabbFwrAnjsPuTiLxN1G249EMN6JbfH1EWB9hiiUNGJTe",
  "key15": "63bVyi2fkK62AQXu6wdar7MkqNtaU7it2LKsmHsc4QpoChfQUTsAvpzPy6JV9HRFFjecDaRD4hceWEFaieFBvTS",
  "key16": "mkGasvVMj6QoqeWHkwYPPf28A6a4tMsHBbPuiV2FrRafLKmUuJn89acT5v4KZmr9tmtm1oEiBPu6JAgyY9dsCyE",
  "key17": "35KANGpivypnETgqCjxdwRpQPdoA7Cnn56MLK8hyj3Qqyv4NywGSMkHK7AV9uZ5H6EjQyjh5iHiDUoNRYNBJzz8c",
  "key18": "2rbk13867psA9peLQCdLdPYs9AFSpRz8Hu3yzsvM4rMGn9CmG5gMTUUiMKP6GVQjA94HWQ74pg94BK4KWL7tXPhs",
  "key19": "4D42v9oWCq3LR2cUhWZBM4wk1n33iZ3kpUL6yhfpjHrcFCf45JVfoccDy16RwnanfxjhTSLFbamdeJEBMwaw43sC",
  "key20": "2A6RxUHnVmRMMsAqwMLuNN2kHnHsZhRzNpAPeAqgAdAdQ622WKUPG45jwgcNYnnWCgkbU3tMmUe6DPSHEAyjRSQA",
  "key21": "2DGMocc2LDFdpJv64DLL8nRuCrb5PNbmHha8rRtEaZ548eVtKFje77BPy2tS8jqVPuRonTBR8Sfa1x3EjxPFfa9C",
  "key22": "2Ah9U1Gvge8UfGdQFv1uVu1HzHsLmiWmEi3QKruBEpsoJAYt56DNjWeBpwfHpsRaR19V6pw8ZCBM3KtZo4H5ab9p",
  "key23": "LeHFWQ14BxeoztWMoRGCKiEav766ZFzJ75SLKn2ginx1JyuvwQACwXvNNnbZ5ReEXmPg7Nox1Kvj7hNzumPyYxA",
  "key24": "4uJGKtWY7J7ZTdPZsVnUYGMgtJUMLBp2hrUtPPHgzWTNdvyUrfuqkUP9UefB7W9wsHLzWaQQ3SQXECwUUofe48ey",
  "key25": "4ESHokEay6Uo76KhouscU6Pkf1QY4zH9xFmagdKH9So8LiHUzEAjdmfxgb9augnTvi9Y2YysWYVFCwd98ka67Va8",
  "key26": "5tY8kDQSjsWn1pV8x4iipWKRysPhJYb7yRqdW2LDMJLj2BZJMdivRGrJSeJuT1FYTjJYqkFKocaVWe7PrWfEDm5p",
  "key27": "287xUenebsewgd9NFov7qyMN3hG4i93h9zqpekzqZ53CRj3hUT1qPLMcB1PJdUbuzgp8u1EttefGF2x5tjsHRFGy",
  "key28": "3umypiQGPNxRGPz17Y53x9XoyWpd43jzmzBfVX36SjRq1rKLU4dimydB4o4atvq23HxfHzmmURz9NaR7noAw1TWR",
  "key29": "1gbGykTn2SGY2QmE8NTrADDTDsDh1C2H8KSwNCHiRvcsnC3orLdVGFQWdKtUgy21UdPRBLiM7NipojeN83tHUxt",
  "key30": "22GWyDkzkDtaEzsDTXbTnS9PYzgcKRiWtkwAGQKcu66GGzVgRr1RvieN9XCLnTnijr471uzGdLcGVCGskkCCtWhL",
  "key31": "4A29JwFdC5FVGuyfYTuBJXwdDGUunGEx8KdFhRPJ7h8c7hjHmGgJA9UJyTqFT7AvbPinUmo1iJVN9RggWSRBXsVr"
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
