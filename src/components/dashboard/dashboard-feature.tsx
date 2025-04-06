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
    "4MHxKS2HWg1HaNeg4gKghyMwRQLRg1dH67g364VcTefd5iKJ5cwHkYt9LrLhQPCXA3z9p1iAVoiLuEFH7bbVrJf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GAVosSvuLhPSNP1k5hTqCZCvjrNoNRAGESbBoUfmrTZZqRvA3x87B4FQ4M7UXWFysBtHoQg88AH514Th4fp9Unh",
  "key1": "4ygeatro6okMwSZVHm1tN6qB2pP8qaqbP6ujo9XsnH2B4GAwdAK2zjhBqkabDQ9qwa68ic9yQTGg1NRe3FPQbRYw",
  "key2": "4p3osmLwMAJvKa5XPiuXzVwHqddmZb86kW2DLCQSgcCgkFKYHdy1fdh4gKnnc6i7zeKTsFAm6gZsmSsHMLfaiSZT",
  "key3": "5GT4aZS6UbJ5fDMJU8gjxgE5bsbtdFExyWUpmLkvqkisXiAdnbDbBmxK73ELLWBWFD8K4J4wcrjpTPPgjtkkGkbm",
  "key4": "2Uh1aWciAgAzGqjTWUmLFEBogkM6dbRs2n9TnZaiMTu59PkwJ43bCWsun8cU3eBqdcLeVtUCdYfBdotYxXqGphPH",
  "key5": "5wccRky3FxGzMv8ApTkYYZzZ996rb84wJRUGeX2KnzLzqffJ4La7Y7yUivWbnS3EMe8DGAAK5Qk49GdzhpR87Lfh",
  "key6": "hgpSSwJX1yPiQ1951g4WYchAy72Z5e64R3jhhA4ZNqWWf7i6Pmfz4d3ADMYnSEhdPkmX1hKXoYsW4nddWnmRtuP",
  "key7": "FD29WquXXVMReEZ8AfEkPYvjc9P5RKSBZyNHdixz22fgGieS5bmjrD8UCGLsCU1gRJEoE9777M66NLXrvWPQkeo",
  "key8": "334ZxBnuG5CdVaZSW7MoisiyYCoadCCdCe5tgyzx52PbNyiQiZhfRKPJBnR2o4b4ZwkEMJPSqFY6URcSqQ5x1u2S",
  "key9": "egWt9WwHt1iHx52xkzLKRkXBnhq4fx5RK4NRcatkT6Wstb31uiJcMrqCscVqJ6hhB2AsABRr4iMk9Bk3g7cbsDQ",
  "key10": "5dXp2nijHaDNkhN5DsWNdi1yvRpwvouuVeQS9FuAwJnk1thDiWKtmCTVG9ur285TBMFhAN5SZoRGjkdFewqwocx3",
  "key11": "NQZte8Ah6Rwj2hDAdgiMKXgGFcaTZkXMUKdq2wr4oF5DKNpQ1SWMoa65WkPmoH7BLukeTpJvbpZSaj5Wxh3PEfb",
  "key12": "ZitYKfSGx1uFLPr4TyZgDwtStcbrPxYadYCz3qg4awRy1QVADxxMpNcXJFL44MzXsQdBtdJpGbjLnqWe1WXTEYe",
  "key13": "3LXhqDQM3cJ1bJ4oGrpXKjnLYrxfXjGTPupxu6v9HcoHb4RBvABfJBWoioonDdNrno4bRiwkvMs9VHKs9Syoxrud",
  "key14": "2mabQ35v5Vz5JTjKgHTRuJG4dbPpjryag2dFZ1kiwKdbYpRiC5LGRzdTCKNUrvrPnoqPdECcXY2s11tRXtiKaAda",
  "key15": "4VR28dbWm838nsArerWng6YD6CqpwqHjKKucxm2AFoPBVBPeh2xq5MWuPMiwL1dqP65JNT3xUnmbXo5LvvQDzMdW",
  "key16": "Tvfnw53fuR43bbKNZVK1x7TpFURfwvAsyPib3BvKppok6PVC143RSqCBTRfyUvkePErJ2GpffokcDwNdcpfSkkA",
  "key17": "3gG5F2A8fhv3bQgwDe3qSWUCZD4KwUhDoomf3kJd3p1eG9cjdnmfpKF7CMGT6aewWoYrGAibGSbcS6NNkrixqo6d",
  "key18": "3vieu7bGP6tPjZ4hJ2nXyQCUzGwjk6dhBL2SbtduBPfG4QVKTbKX93RCqVLNFEFbFxK9rmkSrsj8TMv76yvCauAL",
  "key19": "23LiytMpifeUnDjpiRhVmgjDQ4ABdUXZaEkhELTGPSfQCAXsUv1ZaGuwcf9QHKYRJC6SyxsmVyedqx6V2WfqbhHm",
  "key20": "4mBJPddSjifuKEJJAh7ZFCmeoSCm2jthL1KtovUd1Hg1HvUv83EbhgtpgpheaUAf7eV7kQbGKtUVmQb6MGFJGAfL",
  "key21": "3PSQ6BGwLrP13wP6uy9n8PiGvKwHwoSq2y62Gkk3MohpAYc5MKUPTbZ4yUDrNGGb6sTvaBezdZ9nX3zXivLg5swz",
  "key22": "39KwWShUyhK3v1f5HmJp7PH4zsYvCDqrGt36BGYnEDKwRsAFUT8f6jPQr6oCxBuPwUsAiER7iNrnbSAmhjks1pHS",
  "key23": "2rWPevdbN6tMqgVUGuGwruxCvjfpKkD1N8KpKY79GG6anZSbwCK5bFjSEF1XS7Vj7WLdFzVFrVnN7goBLbWSdVqE",
  "key24": "i76DXiUcZV1Ri4njJPXpRZd5c66Km518AQZjJyd4vXm4FXSbNPy1bG7i2vFB7M2UVzWmpYqjvNovHfBZCMhhCu3",
  "key25": "2eZUtCqNvMGSpSkojJUx9m5W4K8HAz7AZvnxs9jpqd6zi2MBtiYB2SqwrQcEKs9AZEZC2prhJTRnQpTNhiQPhTT9",
  "key26": "4jCpYYk3GuzzwzknN5CA9Tck9GooLq9sx6ih3YUJBoUiqSDZTLKmEq2A2FCZUCL48amqb45AFLvxGAkpxaYTNAhM",
  "key27": "5ZrmwPBVTNc3NxDRvuqt3UExZ7WcePdPitnrFqbn6kBCqK6YaGis5c5WvGTrYs6jEZiFeRTWDoeE4SM5YrhhFzof",
  "key28": "3UFM3nY7abkmUcYkXT55n7KTW41fDuHssUmL1m68CSUtxjuxm6jXiTSu9D4pcnbpPqupAuzgw4ZMjUJmYboiFYNj",
  "key29": "46sYWQvvhLJohXz5J1SW293RJsoSuDRmErDAWL4PQY2dbzdCeP2ueA7GXP6tX2rnFSL7y7yyr5DRoQn4pFTncVuQ"
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
