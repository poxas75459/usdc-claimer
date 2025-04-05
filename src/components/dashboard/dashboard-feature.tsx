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
    "3moqE7euUg76ZZYpGteTAxvaaimPQidsnMCjWB4XNuvAEzVoYQJ3QaXWJswVokhJxf2Q4YntKLmxJBUPXZSRcyLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utNszixWMuTis6vvFdEPMa2VsUozfcynEkCAxGZdUk5TYbxKC2C5eS9g9qXghyCCpR27PFJk155hQEWA4eLaLQp",
  "key1": "3NWEVazs6vWC5RzHDyuu29AYJKBJynzdnV9LQZw8jGbjQ3wSxSDdERqwB9DSe7GdHVkFU5mw7fEgLx2fKoiNksLy",
  "key2": "4vpBKHZdZJzPTEHABF5YT3mKK8mpbawAdGCY7toiSv3fCfvioQNuMT7VKCCRPzB3J5KecAznGMt7GwruELYTqgzc",
  "key3": "49tRWSkH6WR2Y2Yx9BY8vLqTBW89V5NyqRrzR3JEyPiScaeLrgL1jntVu7ejTmfGamneofYxvn25CBV6QYiDetXj",
  "key4": "2786N5B842NZzNCFpKobuzjxTYnhLZvwMeeNWeHFjeGUgazELwPJPnYDzHFypdAFSLfbr8Cj2LReHwxEEVDEBrgP",
  "key5": "3yofVo1UTShNVuZa787kpbaXTVMa1eVwCnekzUjapdFNnfxpuD1TjPHSEJaUnmnxzYNjfAb6FVbE2p73bD2je5X3",
  "key6": "TegwLPWfx86qWnjygwyLsuuj82MVDXfxvbEw8J7DLzJNd3LfRVCicFsTaWCR8aeMivTNNCx5L2bZWLda32CqAK7",
  "key7": "rZLWCviWSWV5hp1CbA5xLAyVEx9sWfygcDLixzcjmGQ3D7yh8BLPg6LeiCySwFjbYby3xCYtNfAWPAP1rwptmUZ",
  "key8": "3a4o6wztpevUgu9qp6FA2Wg7aCuo5bTVVcREDPkepVjRT1EPUnJRhmbNPLw9udZi8p1hvEpst45YhThUNyeZt8c5",
  "key9": "4jeojwbH38WVm8pgWbJFhc1rAHGig5vK3rVe5MQK68WAHYcUEauG2ufDvTCJFa6G85yg3YMLSTsKqxN3LdwqT2AY",
  "key10": "4K16xSrjvokku3E58VLgDWfA4wg9wtDtUFLfUhn4oPhCpJn8aRPAb4pMmbmohuDNJezCLeHunAoJj5AcdRFiGD1L",
  "key11": "V4a67BE1yHTVvRoYnLjkimc34k5N4AvcK6FL7MDHy6fT2AEDmB5VTKREDbQS5kWZaH2BGYUBnSx4q92yWuDFA6C",
  "key12": "3aBpf9YqJnQsGekRqhVeTSBHK23xXU3RbKtCR2d8GxEWgrjeiEP2rkEi9aavngaBoEVWzPBgygtG1dBw7bXwuUHe",
  "key13": "5vC4xvdQFeg8W1KxYgzaEnLS92cX7UyK3F3qw5HXJDtKHo2kRNhVbpfZH3NiaGtcrk4pywfnoC3qbgwNUWUHnN8k",
  "key14": "4rvqKaPxmzgoRARH4hNw4yFDEo1byis9xo3nd2De4oyRhiSV5GKMsRNMThs9x4s6H8hFpdhkWJmp318DmzUoQKpE",
  "key15": "3n5XNe1iEdLGytjaH25wVHy5zKwhP7UQbusXWRHubQJxZQMsXee4SkDpeqSut8HNQLXLGrk3ZYryhQB9BCpHsjKg",
  "key16": "qq9yak5LsUxtsnQMtESs6wQaTfyzuxToSqQvE3ec7722zWgy15fVAaE3q4X22Eday4HvW4a8MLYeDV7mCTVH8dX",
  "key17": "rWRQLZehrHUjEEspVsFC3YpA2khCkQpUZZVF4qjpWnNxvNRHi3mNeneTyxgs5KLx1jf9vCKeLepsBBkkk4h22s1",
  "key18": "TcjrhSXrKgr1PGkq8rxjddSiYw8qnFGKd2P5G4UBAnwXfXcq7rNTBLTCd3fa7nofpto5UCX6ByP7HXVtjmNURuA",
  "key19": "2ddQyLR3M2PgtY7KnKwJ1FrpsbxhPDRRUPZWNmcEVASztVGADaJBoPCVqKpYRm8A8HefzaEYVrdbEbkM1aUBvTxM",
  "key20": "4DsYYDM51nvTkPN9H6ENEW8iV4jiurKrQzt39j9q6vrQkLR12YSazXNoEKuvN3hzYg4U11okxpbxpRjEvhvNpiKF",
  "key21": "5RHG4wk4DQyGuNk4a4GkN8EExtSLL944wpczE8TSs83y8knMwue5yveVtpXcmwk1zjbXvjhHP3DxT73tY2FYj4fN",
  "key22": "21dbgeF6iL73EsP4PcxCU6SbFHEXoj1cYDaoapFunaAzpHBDAa4nXnRiiWUwfdkFVMVUA7J83d6rj64csAVzn2Zv",
  "key23": "5z5pHdhCBWjcPN977ToM8bfMhCRfwfZkop4P8ehSMBFRucEFhXZZP5bXmrrBX7GdBHudpHqt6KJ22HqGWoxaJp5s",
  "key24": "3W7Xqs1LbfJGa3vErgCcHWCWpK14k7fP5HhUgvkpicWwVe2yUgLDDs8b7BRpLf9yoZA3oEm5GkZ1nJHMmuSPexv8",
  "key25": "3pEshWLeeevdRaqEs3poLLWwpSezwNZF5TEhEWnJuF1WiJipF2CMrFpJrdseXEfRg8RsmadxdycRVseR4WckcyF6",
  "key26": "3AmwXXASgCv5sk3phJwZjeBE3q5xFRjbfeGTu5vdciWcnf2FsESJVi6PCqqTMqHtp68AzAmoEggWrG1kp9XgoTBB"
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
