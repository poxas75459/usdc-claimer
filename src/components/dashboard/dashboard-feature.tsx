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
    "5XpGVCV4jyCmfSd2y75SBMbTjmgpYiyibgTiBYdZ7LpXxDTzED9TvjVwh1L1WJZy8A5n9eqSMoSna2NR2p1mr8Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbmGbs4EWRJVcDdGUXVcNYkGpwX8vhXFkpZq4BpvypFFbMWdu3sCj9CcSpuTYBxVX7mkfmrSUD5zj8SfvLUF1t7",
  "key1": "5xHieUaQqFJYPcFEuGx8s94D5xu16kVZ2xdoKPvWWenp9EPp4SbyWCrG5o5nVS58LN7vNMMWkcWoXmA4br61iheX",
  "key2": "GV28JWEvYY7vUqHE67TahTtoEjZsCZeVJQtVhohmxnUKKtCtKCoUpbsbFq9rQ5MEUvYbqDyrmy19Lj9ULvbJaRQ",
  "key3": "4fN9euxyzaWt4ydurFmJC1YjgraAKpLyvd1ifEDSSdmAm2YUnF1q8ZPNtyeee77MMMWtD2ZEudxJibcEtmM4EAbe",
  "key4": "55i9d8YQYfukB3JKdEKsWF1HHnp8wCgeCGiiAcSAK8cLPCRmxdad6jozZUeH57A29HSPdAJZ7mzvhA9SoFJ3VdKN",
  "key5": "5X7XA92ef15K1YvmQw6PjUVMLzdkRncvMqG4YNd6WbveAx8bqSisjiDgbBhsSYNqnTs84LzAZzDzcjbEhwVG4gaK",
  "key6": "3ysWP2TDmmaqa2VxcyKNwot6h7UyJCsa8U4eTQHrAVk433SAKbSycGdLcWhUtUvYZaS1nEW5JCoJZ5eyo4jeAWmm",
  "key7": "3EXcC2CSurtCCcdHfp1TCAuZTHVH6MMKJdEFTgYoKMrgkvpua5x2DaEH8aWDmL9TrK8f9fHHFzJjz2SFcY1p1k7N",
  "key8": "4jXWvetseRwd7R8MFCdKH5w9GbYYRRrfZSA1XL5nDJe8j73x4qQUT5nUQkAwxuKTfk2QPM9XRyACaopGjwPEJB3T",
  "key9": "4HWnHNDcwou2qLwz1kruxa56yAwzYr6skiazkxXa34roq3mzf5FeKKDi8mkmBujzRy1obgayLYCA4iRbheJ4rVB5",
  "key10": "juE1vsmMxMXm6aFgL4Gde5R4XT2F8rCcUQEqRP67kshEnjPhaQKe6W7Fb6eCg3cdQ81HSzFxQiyDGG4dmSWLYya",
  "key11": "27meRsCVBM7KvJ4vspHHafiuSUJyq4s4MUa4wueZQGtUSuZJJT643xP4LXWYeunMUGTMifqViinbWhvJA4iRTsoL",
  "key12": "4hNXoSBVPwALRpC4gMWi9JFHKpDRu6wDuCEXHdw9DmrTTv2UaZjAXy3bSfS4KH4p4SBd37vx9DiirorSsewZVLCd",
  "key13": "3J745JB9K4H25vSRiAYQV41NfQh9yHytuVRHgmqW2DXr7EwJZxpWWn6S7oDeWdSaTFjiGAkC73bQmx9ztY7ifcQS",
  "key14": "3CRYLMzfR3nVdSmVa4AdbbxZ2hj7C73v1QwuUDzdK5fJktK94XmKn1STzo9hqFGGrrgv5T8mQAp2eV6aHJRbZXm4",
  "key15": "35wxG73RmheFQ6KsWscpuno8Wi14SgCqw51NptjCwVs2sEc67NWB5EyNANBKaVnQ6MP4R5G58Mw13uQJdck3Fskr",
  "key16": "4NurHComEa4rw4b6fBuz2fAVJwB4uaAe8HqZsxuQQ3uboeJZxbbgdh9JHcWfjm6Hs2z8vvAnHtDR5Uh1KCCEsGmV",
  "key17": "2PhbpHfK2fnLoumeDvRFSoZGBKF6gPceGpNoEEwq8jbdkaoopcWncGjsAQndCGxGwuEgeALoTmCmRnNQ5qgYNfUT",
  "key18": "kbhLBJwUEwWHX5vKGKT6rTfdEWVxDpaDQoJ4Q3gcAuTsr7PLH1ivBJCHBBWTLY5xDz5eFXTjhkpQ33Rdgkc1YVM",
  "key19": "31nk13t5LQY7my18B6zZAuPCpxf9HLxf4DwegRXKiQ6DuvAXSCr8JzKbyFbLuax6kHCUmvuoz9sr8DEHPa2B3sXE",
  "key20": "482J7QwT38YzCji5PiFbRxoYZjdEj1vt44sfaZrH1Tn5mUm3jP2EABRdQKpumeyzuZvohMoFngthT9xAZRxMj2kD",
  "key21": "5QDs4SZG4iSRgLQ6ygM3aGK53nMf3NuLetWBcnj5pzPVAhpRkqT3Gfed13JQ7UHEaVT2FTyaN5B2LfgEHS1tCYc8",
  "key22": "4BBa9xh4zU3mbqFE1M47gHEA3cb1mmqtCX4Lqxp2PiuVVEcWaNr5F8QbmdXo9KCfhBR9np2zcMVjS9mrgUXmLpaM",
  "key23": "HWvfyyVMpnS22g8jVrNJpapVv2DZQGpVveDqs1Rzv6rPpo8MyR9tiLaJwhHsvSpRNZifvFmyg6ekmNVJAvMFGkc",
  "key24": "3GRdtsrCBLrMmQQ1toWRvV8jpCRnc1VRC8bAj56Hd28jHjTTLaFGEwJtWHMypvG7JqC2YHRQgPG2knCzBt7VR11o",
  "key25": "2ba4nA35EXdsP2LmExss1BNAsE3bDyPukSVpBnTQtTUuyh6FMSMzBMfp4viZ1hmL3dn2hnuQhxV38sg4JU1dNNbu",
  "key26": "3aM7RZCV4mwRSxDUFKFxP425PTdJCw3iZcdZpEd3FdaGtMei5KV8aA82W4rpu44F1fq5B7SdEx7ABP6Xdw2M7SU2",
  "key27": "3RyorGyw5kQWnk486bjt7U4fj5aMeTaFxyVVtMpNxY2bYhAL5eVbCcAs5oYTBGXctNpUE8EbWuuKdHomBuSq7om6"
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
