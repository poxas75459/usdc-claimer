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
    "2FQy7RLbaeCws45QP2VxP93gpxXVySQzbXCChCb2uN4YwaY2AFnU5pBeKraeqXZyFMJzxRCzNKbYHzknufYcGjm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQK7tSyheDDeDUU4ufgiJtqGeAmWk1zrB1k7ty829C3CGtKUasrDdeJqtyL4VvLW7awguZukkQY8SAHsTn8evDV",
  "key1": "48bgBrPeZNdvwNu9AzaESkHb9rgjd4vjsmnRwv2An9KmvyJew3tSNPtPy536Awv9tfsrco7RDAanwsv17HxE51Md",
  "key2": "3yCSxUFiCoWFEPteomcAsiFcWoxkV5jLcrxXNDachAKAQhdrjwui1Sdo9wmbpZX7uR2rVzpP5a7z3CRzhWpYSywt",
  "key3": "2rzLeUMmmgmf5CV3k6yF3XHLfdEsqMYjZ4UczjddCYujZ85GGksFGskjqLkyYGvDjGykEZ2jdtrCC2ih12hthcmH",
  "key4": "3TsPQKMkF8GKP7yrof9dcQVcn9qRxUfunAPP3tfFYK3JreT1wezgi2RcjUeeZNMrA64VJkQSmnMebsgwRWevWjuL",
  "key5": "3MC9rfot9zCQvP5wJxeXRKV3g6dLxMB3DCceNuNRceKJ3yZ7M5RxYrP5VyxLB8ooiiWaRHUb9u3cxbyyRTwyT6qe",
  "key6": "3Kmy68cUU84j8zTZwRhGH6xkxfv4VhvgkGJ29GkcyAUooJk5BVEARcmNU1snL5nhGKkX3c15ehCEZqjmRrF18Epa",
  "key7": "3frgQEymB4eFXMqZEzdj3hYvVc1fkHVCzjki36LaT1NqWmUdy8faU23Eq1oVtDzDG7RKwhCQdsWdt8hPseKjyMTs",
  "key8": "5iLGKZB1KvFJSk8PcER3KK1PnGvCQQ3f41M11HwpYzwmiBHRDWwsrrWM2YQQvo8ABQ4W3cpfJ9U6RCtvVhVBAv5n",
  "key9": "56suU7q9QS8gRAgk3bDrRt4yTSsgzwXha81sTQnybyFPaEbVz4kDLcP124MBTns5956tpdbCdHLLuSephnv5iR7c",
  "key10": "ahRSzKfP1h1HjL4BosNhSjFkWLJNCy43WGAxyxJ4KPMy5R32BaXvU1NvSXnJTwkaLw5J4jBQ3nCfZpnCCje6QX4",
  "key11": "5oDyTjWJRTAC4EzL36khPeoLWunVfsm9nMqFCqV9LwL2Jc2cLobfW8ELTTjLbdnGhCH1WJNH2EmELFvZ49tCmTwg",
  "key12": "5Wyge45wtC1yE5gpVAXwLVP2nuDsfCjWtZRhTWLJ9BQL9QyAd3J48DEb36XLkYDW5LzoRYoUYR4Z8pgBt8UUob7c",
  "key13": "4am9B7NTDmB8nu1Jp9nwGD2mPnKW4hSjj1PD2rYmgovLFjPt4m7SaNPaRamoQLEQppgvVqHPomqM4YHnkZsWihRp",
  "key14": "3TXrDNBkrE8cS5DvYUYq2iu6UWveqgZEKv1iLB9i9nfnvcRRNCAjCqDduXGRqLqD485gwT27qyFZWFN7VWxQhSSD",
  "key15": "3CdabCdqeBFgJYVZwmR1Pi3dqHckTzu2FUL3QdbbEWjzvoqYz4oZ4UVA4k1R1WwE2zxD5ZZLSp3ZvuKKGvuz69pQ",
  "key16": "65Y4UVjn75kV9u6cYJeTpXzh3py5oWVcfJYJR2qhi7sHCWwnASBd7WwD7aFrzDxJUt29VfcjMy6TtFcJmbsNffJV",
  "key17": "4S1bfm8E6atRtKndGnNVjDq5s4LfjQ6vnByPtuhVYUfnsxdB8EXGhCuEcaM5XUimiRcx5VPAj9ExM2aDGkWhRDny",
  "key18": "jDmR3MQWFwF1R4MgULWbC1wxVhhzTDZeMZkzgjBdTaoA9VS3YGWWNrmHdBM4F7rWD5REsBa5TzCpUfEYpxuU96D",
  "key19": "RDQyqYM19xGtxaP4UkWZYhSztKw1S4Mg4wJgVpwVLQjU586shn5J3ZGPQmVZHwTvqiBS4iZ1mEnTZn23N61jG1S",
  "key20": "3pCkBgd8kv8unzgCMiRQhF1uohUJzKJkXkS5Q3dbnDK7b24Q5kmvbcNdXGVDCDCEFc1LUYqvcSa1Bs3dqr5iym6C",
  "key21": "4s3Tns9thiY9eJR4u6sR14uStWLh2sZi1DyH31arF2AKobN4MSgEqYCEHe3VMJQ6orDZX7c1kh6JtZxD3Qera8ey",
  "key22": "3sbGC3LDAYEinMYGMFJj5rQY3HgiAsFWsDWYYWBedwzUcZzrE551hKhs8PWK1eiSYGUKitdKLK8Sac5GXYjMdjw8",
  "key23": "5pZGfNVMf1xVz2CgVRUKsh8h8ZfZju8wyRSU4Hv571SVeMiDwtLdv8jreLNcz8SLFXneVc5eNSbviy7gTjajGwAM",
  "key24": "2JfPfvNeCMEBjgs6wKhMfN7Ff2JrT7HsrXgxB5EyA61ZgqvKbK6ikp7puuSZmkkpegMGquoJX3Sckao6Kq4QKWGL",
  "key25": "3xChCcS96aXxbxeWUfCm1zXaSZ3AxxxaC8GayDALrQ8J6MZL5We9VrKk4xcq8yDzJfowdr6kR4CSEr29gUaTM3Jc",
  "key26": "4qHMydcwJvzFhkuG1wNKpwd7a9xbKmRwL4patwF8var2uAD3ZyieQWRLMj9h7TSt7U1KVbJSHvV4fcdbqYnMTP8q",
  "key27": "5XYsQTdwEU1NDDt3w4R1BpmuXMeAiJoB2TkJEtKCKgzntFDMM5mf2dp5zoPH3rg8ukJ544UPxir82tmMupV92B2J",
  "key28": "jHawyvxt63pkqxm12onsCKZvdJVuH1cm7EkSX3pVmLrsPNP2ZvcC6qr8jJHxqaEqFRzxrfT3nnbuziH3dNoyJfP",
  "key29": "nAj8mhByTr5SfS9Yw6RM4ZYVPuwvmsxXqoWXgqgVjoPfRruBeKGb9yrJtBmZb3z2DQgjjbiXD6bcq6yieGJtkUc",
  "key30": "3FqiLcZuJwi1ni5sPyj46aiqYapMQTiX7ZhpvewA6KVAn2H6hmdcUyGELxuNrExWthPipyCjunPi9f2QP73zxf5s",
  "key31": "24b4z9GoqCULbihzsBSUUD9CFqhC1duqXvEA4i3GMw3xXKJvSrPfU5xYcuKKhJVKeeqryT6cFcJ7BUqCe7ZM7okM",
  "key32": "4wc771PYKWMhiBLDAPdVEhzEtLTvNjagarmHTjnmqWnL2yp6KybuvfahWYfE2b3QUVRrJ1SN1MtMVARAQ6QkwfEr",
  "key33": "32F6wMsaaXRJuJs9EHLFZvq9zdfCyjmE2DKvr2nxiJcfw5dJ3EJU1jUA3LZ6CFzfmwtDftgMBGkKJ14KWZRQDVYN",
  "key34": "3purEW4Jnf1T4FtKZ8cxmbs5rFQCNtbSditw7x2FjxAJRtZSYbs4s8XsidszCLPprLAuWaXvqyh9WCPt9qMPks7d",
  "key35": "4pqL2GUSYPjvAgykQuyk3tsHGGaaj56FEuZMDk9k5XEnzkZYduJtAaaNkAYqC6PPwkdeiqFR8MiMRX9tkT4pcgHN",
  "key36": "5EgDTM2upo6qmncjrY6fxjQcqCdhN5nUpBj5xuE29zih8vW6zstqn4TsenQmWRazM4QA3CUHwCmzH6Mzwcmd1VYs",
  "key37": "zTPekbpxdSk9tdDkZkiyydkveshmBU8J3yA3mQvkLsK1f8mtAGH47DDw3pmw9vrJQ4UYDQfGaM7bivYKQ76pKsr"
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
