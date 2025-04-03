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
    "5P2qsFGZfeUBJpPyFMFVwzJkqdhzmm86CygQaMPFtwaenDDwWrtGBVcmdueZ1FyjxgYZSDor5UjmFt4GExhZRLHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qESdDTzd66wGDpXPAxhia6NEisoaynRHGvz8ZciLQwo5QeamB97pPNsgQ1RnUZWkHju8Z7HNL1HyoHgFfBEFqqq",
  "key1": "x4CkMxABpD3wVzzV8HCpjnsKvCxLhfoEbT3DyZfVigwBCZJgNDAwAaqEotzE5g3nhNFpAWShgtGLbYmydt2YLrM",
  "key2": "4Lo81BthJBPsTQu6FWsruLRwwbMBaqb1duv6D9xSpJPAPAn8SQ3ShfJeJzJHN35R46bPS5tMQy3AQac6rWaTFe4R",
  "key3": "h6PAeQZ6t12NeSpaFvAPgjLs1EqfG6tSQQMz5Mggvms4KHXv6Nna252JhdrpboQhoyDSwsL3uqz7K1vRF5QBYRq",
  "key4": "43CVbMSBBeKDCXMR658o1Cy5EKdt1dbndmRVj3ALTtjPu1r2ubLmm2HwPzCF4jVTggpGPWrTPyi2L593kC3aNc8D",
  "key5": "2PsZSv3xHYnvf3WW7YYSLAxYCoKrfUvrunwt4Z99wJVc2f83cZNL6UqT6KkMUJugiCt7UgfYvLkBHdW2oauvh6Tk",
  "key6": "byNM4a4KEeHT2L7BKjfSdedQUU93jTmAhRTDWZ6hPxU9frQgUX7DnSpLRvejd8f7yG71PGNmFrYr8mRdcvZg8Xy",
  "key7": "4C5pX5VMJhxpo4nF22Be6NDzBQzrBagL15DUGP3Hq5w8jhr7jHeeqhXrMJQc7EzNxt9VPuVeuzBRaYThWCThvNos",
  "key8": "5yZD6LeyAiXj3Rs7eh3vWgCtPsHpShGZc8uraBDJsHj4faZq7U2QXFWMrt9YaZ61QQGCcq2pPLXKmSoGPXTfqbvy",
  "key9": "3pzinY8i7jWBbqAf3spsFzDjSaNLbVcJ1STA1agCzdj17kEx9x4zvP8fC4dsJqmW94wrULqt3ksFA2mbXQdsk5Yw",
  "key10": "432ZTs5b3YeFsBxDuEqK5h3ur6B5fcPHKSdLMJbRzBTXwuZp54iXMDNfS1kMv2GMPam3jNRfNQ6n6g3EAiATAVHd",
  "key11": "57oGjCxkJWHRZZXLHL6ggtuwsGBdEQY6KPixDxxXQA5Vh1xZyoxqxu71Zc4P5EAZ5WnfR2zesto8TG1QrWgPsKLx",
  "key12": "2S5aMemBXESNENGzVTdT7SiLkiiZotgyW4K1gwDX2GjrUJF8yYBo32KRoo4fSqvXYtjsd1qBMPeQUf74g72LLEgh",
  "key13": "2n9gg1xzYasVi9R7g8LHxjSD9NgAhgtkQVTQvoXkswTxJVAv2ZRygCuyUtN8ABr3YanQ8NMj1Y19QoMgR2jTxBn1",
  "key14": "5XepN29fbpvCj38u7bLNTk5rHtdSrD5EeKwtZR5PZgik2mXm4rVvajKKjTFTGhQnrRENf2kRbxQvAVqSut3ZVfYu",
  "key15": "4wiocz4puBshpm3jLvkzwebSzfGxzXdj6Go9DWW1CXs6XgY2RLfouc7VpLGEWtzRd2f1FxyZEFjB4iaEVAE7BQ6B",
  "key16": "5psL2goHCUCLzVbPa4x1K1C3rJUFF5XehUxnagYArWWiExrrEsNSfZaYBUFkdtHZk23bEagwCVexufn4c2YDZMZc",
  "key17": "2ugffxYut9NPi92RY6t6BDantoV31R8fHgaVUTaDqtRSRLef2rVkCYvN6Do742btT3p9Y9S7ZD672r3UsyKQVb8q",
  "key18": "b3xQ5FA18ZM2TXZWWEukWEwXrrypoVwdw2qYjieDvUrdnhkNgpTtRXKUfwooeFiwRewbnKDZELTeKQvaepq3mtc",
  "key19": "5qubQw1X8D1a97pSTdMG99GXAXy9Phm3dsBr5NXLyNDHn2iSnhoZ5YsNJmoQx2L29Hud9xeE4GhQttnrZs69nLkj",
  "key20": "3Cts2iGFLQ4HeceCkm9gaqWKDEezr4ziA6FQx95spxipYQjqGtCidS7u3rss44wteJjw4QZMtsgPeJDXcfcaCLNZ",
  "key21": "cJJjXdWmgER6y4PQ3bk8Xhr2kp9gELhxZvpsFBZAsrircbihjcdFPQ2HdB8Q1ae5oDqe693i5JxhKp76LFpv8Br",
  "key22": "6rRWVfsMMPBTGzxfaKDiEDeRmA2iwXqUeJXUuUkFdUtHRuvxNpfqMUYVVs2KCogpEFeYbGTkx48HFrk56orcnQK",
  "key23": "3T3BLGcwQtAwFrEcTuYRTpAfZRVd65gQdBhEYCupKwnJSqP6AF5RBRK4KHdmKzMSYRRRYyG48DZ4SUrHRUwD5ZXS",
  "key24": "2MhKzrbZ5cAWi9qm945BfGrZcL2u7cGUq8xXTKgXLuzrCKEREfKVWniU3kr1MRKZhF3qeYgXYdx2fkxgPJdYeE98",
  "key25": "5bgdfVLiBaUbYZnwg5om85bzDYZHrYTWcdUncPjyMPWjqjRAgNFiDmRU1WbgTLvDpbHXMNCrcTr4JbrQdQQ4WFYh",
  "key26": "4QLM8XLpVfEW8aRh5cKVE7Vm64cSjXMpw4R6AUYBQRNuHuftyBmu9wqM2pdCkmSiyvmWC4f1uwn4yWkbD4CsRq37",
  "key27": "2aeXpRwiYGPK5pbBpkd1qSjNv5gLx5x63jXQTHbmC3wB53usqsEok1WRX7Coek9rLjXNFqhJE9pwteFHCPoJgfP5",
  "key28": "4FZNwELFc2WiFy9uG4MThoLG16FPXmLYpA5tkaPz8dc1DYmMEUcTrcVycMRDJyfL5FCTvsp6GadTRxN83pcjFUhR",
  "key29": "2eK5tJatCwCCCH48tqFVZhfQgW26jon1aGZLKNSZMRdnojx5kZ1vP9MpSAA8GLGAAJ9GGszfsPBahTue4G8mRTWQ",
  "key30": "36uWoz7Zn1TNhc1LLU3J39GExrpTTaUftWDT2xWcgazBFzKUGEX4FRZpz2WGiLjQP42Y6mceXHoD4S9n4trEBvme",
  "key31": "124HTe43ykuuRqqveEAJJEKQTshdnZaDwZDiGD55NRH3HBVR1VH8mxJ91KxuvhJDi3TFmBS48RDvV5gQ8gWF3zeJ",
  "key32": "2vEx6sRbrduWT4zFoTpLjqLLpyAz3ZbwKuiX2DboRuCbStVYRu6W3XchL6dnJ4VcSKmrQTtiVG9VBH9Z8uDcxia",
  "key33": "42BA86uvksYqBuosraapeKtuUdhCr7cj9N1MGUHZisMtpqtriiLb8AgWcSrLKcJzioopVJkXJww73BC71WaiPfGc",
  "key34": "5PtaPyxZMJdXZMbcpYMgdTKDdZQTDX8GrHygQdzWG1mVnWJha3263F1U7v6HkZ5kqf4oov6NWt9dKbT8Ch8d6zFj",
  "key35": "4TK5HPA11j475JBh2pZFWR5hHGtEApnbCzvhQTU9tF2ReoqSnPe2itWghm33vcGZbfQEHksoyLurSi69GYTBLCpG",
  "key36": "3gHRfc4pdsebQe9XKGyGjPNLeKfdBTUoYdBSFjWf1YmfUTMGuxog1CEAckPVAJ1crFuhyreaS74qNt2P45HEA6na",
  "key37": "yLSBNAPM7TVmjoZuyqMHLvUW1qUNbQ9ekEW17jvqPTbnHJMZ82QuEEQwqY8auzNp3aticfaiPqAaA5Wz4NLihi9",
  "key38": "2vkEvjdCA6cMAdMWFeoxQVuVBmwuHTvhESZDC25CZQEjYa96bQ1DfHVFJ5VnCRrvZupZp5pgCM9JiJuNtZ1j99wS",
  "key39": "38JLunUPcuidxaEkaZvsDjh1SFs1LCMaNLGAK9MiVhkxvMmjbFzzjMhFMdqDn3r4GagVEwkg7i8Z41q5FqovWv4K",
  "key40": "2dDAMSEMDWENT3vuqXMUEreczxzfRXz7YSZUKuSZLkpKbdNJrUMDvU1yTt68BNVXdnmdCWnzPxzMs9YPv46r7JuB",
  "key41": "PnisouHFm5ZnsKQ7TViiNFUjW2EdrxSE5qEMMTxvcQvcrpc71DZJXayJM9HC56M7sC7LppNpWh72xQmyu4WkTKp"
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
