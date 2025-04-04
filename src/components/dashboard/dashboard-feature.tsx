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
    "64DcdgvjimRvswU1vezhpA8E3xQjNZugod3cJJiNa9y3S47bLjcMQTQFganY8PoNJtVtirqhvXxfCNFfik9BCce7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4A7dHj2npWtWuVpCK8fAeEXxyQkiDMG5otmdmXqdqQ4tS7YjXjsmhBzeuwY72ext8KxMc5Cx2pHp69bXcEeXEA",
  "key1": "37KKc6mBdWowqJpGuvEcQw3n1LqWuLXCZ9UboohBkiWBs9Q4py6aUfYA7Q295DnVNf9hexw9RWT27Q95bLXFUxAy",
  "key2": "5vCDFU7eSMpjcD39X8YETwzpPDLKgfdndsRjbvktH8K8PVkXg8RETqCFUAnFiJy7d4NhnMn3sVotfgaC6JKQmeqg",
  "key3": "477dbj8XfAHYGADyAeon9isgjQENigmCx1Ak5ADQGNrnKf27L9NNTXwfHMFWNh35kGPb6urMwnvubz2YjwYMpPTv",
  "key4": "3cNvRFwkBaC1MsxhBB31SQ5fAWPEThSGTNpgMqrt4bi8XLR8dakLJvC49djXsSqQb74ZXHv4YopqTPzcMS9aBCZM",
  "key5": "42C2wCurkUiGN5k1BNgMkvTfFhSsazdeuFu2qvc2vWBJ8FQ6Y1ESSbYko5RUjnw385PEmHsR9noBer49s6zyFEU4",
  "key6": "kS7mSHLA5EHxiRP72G8jF8xpFPX6rnTLDE6wt4iGQ94n8Vm1Xj5qyNv8KetFJaEH8Lz3JGfxe4JyE7B99cQyHFu",
  "key7": "2bDEbkLDGYYZcByi6DAZYqcPBBDfB1XddzarkYVE84rQqcg947t9qgqZ8PqmtmLJzEXRpPE6Wop2LD36YgjJNfLZ",
  "key8": "61KX6o6jkHkVvhyHp28XvnwuAhKyGpHdwP1uxZjJRmpuEj1Te3dAZ9BbUpyfXPjLjRccijCWVzH1eqJugbqjfS8f",
  "key9": "3ttw5REmXqBucwJPnRQAndWAtRqmWEhYnqMrbJcT9xh4ASjRr8vhdV1bCN8Csk3TUBVNP641cL2ryKTSwQEMec1i",
  "key10": "61M2K2zwEWAVrit9tqiaDkg2QS1A8u5nuGJTw45ifFjSJwD81nC659kQnL88xJKVdzvown6aZfJoT8PE1poc5Y2M",
  "key11": "4DbuqVfNDnSVT7TgwUtn5wAraVhddXZDqRikLBuN8Q2fA4xbDDmM5LGiQNNVKZknigTCsjbqNbb2fF5DUrrnNNKb",
  "key12": "3Jt2mPFWEUPa1zEJBWBZ7nqyCd4wkb7cmSqaBiW2EMGmntQXhir4s7QEQ2UN1xxwfp9ejtkot1gvXnN7hPf1muPi",
  "key13": "2n3M4FA1kMA8kWmGC9hsbY7mTUDE5yxTXiREM4AumzTfgpTKx5YJixMkqP18YeXKHA1mg7fUsVo2XJCzZBHeHRi",
  "key14": "2hrXiJZdTozRbGAmUSiRSnrMxfJgEPYAPqHZLEdudjb2M9xQcsRQeVR62MfwRwVDvMzhry5b2zcfh5RtSkvnGAdZ",
  "key15": "2o91kMDtRyE7mZPCak9pp6kw848R6W81LCX9Q8KHkoJ2bmWcdwzNtceSVCHpKtz3bBsMfP98qWqSkxjzRRQrEg9Z",
  "key16": "7XGwDGNuU8HXgRoQjyGjhgD2s1kjAhb9NCrmWo3KsvESjfqoWQhQQoPKuMNFyZbThSu7GtYxvV9NgjbC9gN8nXc",
  "key17": "2gzVFMDAQ34iEKrmnPatRPkVQMHyEHwfCTWkRe72B7zbdjJcg1Xes2bRMwDq1UDeWWNNxCVAMPanssPh7Rv8zQrZ",
  "key18": "3Wp1718djwvNMFytmYHo8Wa47cpbc5KJ67cTjJCYfVoZcARAVayLiJ1vhA3iSJmW5RUBNCDspWLFThWN1DgXCTJp",
  "key19": "64ZYfXZVfPfpPXyvgFcNdHGHfzoZAU7kVXTWke7v7ReKhyp9KBa62LZYNLdxHUAq1W4oyT7C38Lj6M1vVw3e1HGD",
  "key20": "3GbJXNapZre4hRqRZ1kb2qFGH2vt3wg6nbqq8SUmJpL1rGvfQEgDgoHh31pGzAp6kSZVZ37CeafPY2PxZok9FzqK",
  "key21": "55dx3enroP3aWFbBYkE6scq68ijcHponBv6jUFQZ1BGru4R53y3mGa6Sj5KeDerRcRF2tURamK62PaTq7ohv26MF",
  "key22": "5uSLZVE5ZKeruWgdsNwuZ9aghTwiA33cau1Pky5KFS2ce2TtbTGeQb8wQJfchBLdikFqERrTcDtF7t1vnupzgCx1",
  "key23": "4QvDBF8mx8FFHn9CrGdoVpr9zSLsqbJTZzTB2zyHHyfq62xYCN3dHtdsg1bt86iZ5qfzA7FtWG8bteeQ24BFSb9p",
  "key24": "2QYKytNFd9MjJPggGSrAg9V8z26GEEPEJ2ZtvZ7Wkxf1cmS6r5TuPTNwDaBfYQXmhEPR9ffEGPqthxbM11MA3Tm",
  "key25": "45eieD2Mkk3AaeumJnrQouu4T8orkkQBbv447j1TwubvRpMBqdPuqwage1FxQsdGw2f4FYvgRTHeXcphg2VvV7fT",
  "key26": "5gNkcQGgKP5shu4W6XZnrqBAmfZDwyicAhiSW9saqkTQ6ejxZboUGZ1tH7o3Rj9GErKoENRUxKtmSjP9cio6qNUW",
  "key27": "54TnFoUVLHbBZdivvFoSSLdE2CMCxeRrFwxzTRDJHMpXLzwMPmuQBwLdKEJH9wf5HMWDo4jjjZhcdwgiiAVicDdt",
  "key28": "2vS9XFNRisZp8Rb9amdMvJGxRVV32HdLdwCH5CuvKVmP3RXj47HP6FEj1AbkK8JmgwK922ENBCHWKAgKiK9oU332",
  "key29": "3y7ttp2AUYRHqDDWJzdTsmuZ1MNVoMG5ryR355kJ77Z6khWo16bxyc5MY8v8FvTQZXTh88VZ5rMwNrWeHX1ajtuM",
  "key30": "5JLhAiwp3zrYf5Nx6AxETcn4QmYo6cmctE5CQpapAz3imLfgXCqE5dhecYj6gSbcPwvt4jw6p4oDt4wRtmuht4Di",
  "key31": "WLZE4hNUPrPdWCyXFadAYESH3tLsm26z1pPB9Ue6W8u3wEkNJobC72YG1RDjo1xLtju8YVFz9U98k4Z7BNnkMPs",
  "key32": "5gCfA59y7V1oRHhnvZQzsRLdmcDLgzGunhaMTU6FQQunvqHsf4r1NRTgFACWWSDzbrnnGhrZQoifRkTezUbaKj6H",
  "key33": "YPMXajpjKmTtHy5tyLG1eFxfbyqqnDsgDiMNLNAM5Av24QVfWLXJxbiRaaRxeYnusL8eRbjqSVJXVLRbc8k3HYk",
  "key34": "3eMCNAD3Eq3PXv2E8GctK9y5QYtkWXhF9odVfRKFBs2Es56guwh9iejcT7qW5ixjnUBB3wz1rLZ6x5hkh8TJ3NVo",
  "key35": "5ABD1pfG6gCg2rxEaBik5sfPKhpuHRhbHMtT2t1VBokHSe8YbmaMV79oTiy6pZ2gdxwdDggN1uoDk63swiByCX14",
  "key36": "3CcSVHi4rxjgbAViDxvHQcetR74hFZySYhyBJHz9ySykfPduRENXjLk5DvaHkLMzetLFcEfYdYFAzovgCmxcdVVK",
  "key37": "2ndpV5DWYUsFNn6r4yVAyMHK2TS8uv2WPQ13LKpK9iBLa3yjmvtQkRh6BAcjiZDjJ9uJFiGuBbGv8crQYLW7Vihg",
  "key38": "3RKxTdAS749QATUkJMxP3T5vSQh4nCcbssLrWj2RHytNTwqzqwhsSHETje99rwNcBJ1UxBTfoDGTWUSDjWigBNQk",
  "key39": "5mfGDH76UYE3pGDbwj2R7zP7tBGPPdXbuia2BmfpTqbmNomqfY9K8Ezzzn44jhYbJKqFYN57EZyvB9fQqTTspbeV",
  "key40": "2Tk1HxReAbbYsNptTufWbuBMncbmFkceaaPHoNM1eCi1sSM6tZXSHCtdgCRxiG8Ju3oMyQ5VSe8vDCfN4fKNVsL5",
  "key41": "4PDg6X7GiS9gWacqvVrjnf9hKWD4HGwr1nNZYYizVcYALwZRr3d4tyuJuNyDVFmrhv2qVYY1uoKSEZzAccaXoJYY",
  "key42": "HzT4pBt4hMWkZrtjMzzpzZEzr9SDmBqj5EJyMVWaxwPtY3bhetvUh33tXj3kgw4wdBvZWx6jfvaqXsHU6WJetSB",
  "key43": "4cX9d3epSSUXkPZsqRbnhhi6xiGEZwSYyJHtQzCbr1mgYF1aHSFE2gJG77qh5tqz2A642UYjz65uUNzo8ctejpq8",
  "key44": "2JRVTk8nVD7rexpAqrtWEVpmVAKiSMJDFb6AwBkhVasLZVL2M5xLVrXcYYkoknLqB9LYSnCyaB49eAEuPivBydpc",
  "key45": "SakAEN4meSJwyEytDD8aivgm3f1bWha3fSFpXigPab9cfuwc4PLRyCBjbZQPRa9ZUA1QHogx97CSD9cZryTnHMN",
  "key46": "43LEPyGPwHW7NVLaDCiw2GpRcyqXeafhy7EGtYp319sJEmTkCWuFaWTnFhV6vJa8Q7Ap8ZL29RimrqjdGx4YBYgY"
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
