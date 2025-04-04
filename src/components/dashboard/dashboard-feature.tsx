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
    "5JAQQ11yNbJzM4qrFAdoxaadEik5tvNhH9DYUbbhh8PVry9BerCEeCXzTtNd95C4LPS3Xi5AwBNmCEDjwS4311JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZnuxdT1siPwAJZYFvxCXREMS6kQdCgeE6wjRHZymwkqqXzTEMXFhg4BWU8aystSjJkLSgCgSznhrQsBVVxHRyD",
  "key1": "4euNUYHrgFj9dcYGSGeLkLDHg5a5p9eAPXccrBwSozYBKHYkZkLXaqEtRcVNhyBAN612PETnMvjf3LfkWshzr41j",
  "key2": "3dU1HMpak9V3L9PJmJmAPRjCqRKPdzan29WpTxo5KSnrhfVMSwrEoNRWJEpw3AMtjhu7qRiCPmKQHx2C1mS91fr",
  "key3": "3mxfTizBRdHhBAPTnjBS9uqSTN3uLQZqQ3nCKy1WfU7uiuW8Ek1KQsdmFgUHKCLMeZ5GHbHsdfnbtZJSA5jVs53L",
  "key4": "4svMGee2nnCBYvyd6d9ZK3niEetNnPMnvJRHaSzDXN8DZdy3YaysbYiWDh1Dcnq34PE1zrPN13ZDGUDs8FhcULiC",
  "key5": "3iXBZwvgjU7JWDFz4nQQsqLRizaLunWZTVwkbn41V27WvwfCSU75wVuDfp1dmXKt54gLb6uJCRu2Fbnqo3oDMceu",
  "key6": "buNUCyXfaq8aPuz4rDL3KySQzG3o3gZ6suiaFKCWM6EGBqNr9jHAFJgTmhyjFWi2unjiK5SNWHcSMbygJbPF3j8",
  "key7": "3VdzxZipFA7Az5FsN1WkVTY2jnD9oyExqzEuw9VToDsNmDUSp7TpwsQdmkeQ2gQr9NPVyTB33YdTY7p8GhKqQUrY",
  "key8": "59NnaX7GYQn1vc5ZjwZauBTLuDqkrBTZFz963xFpedxLMpwtA2W1kzPFrBLVJePTPy2CHAXtaPJBvfxzXGqQ7Gzt",
  "key9": "XjLCkExbKPqxVJEvDfitLV61ZV5tRhe1guTd6QaQWrrKbWBzDtuRGbjqhXC4K2h7jqtcdbKJVLskCGzWkn1URF6",
  "key10": "26kEsdAdKvboxFn8PG9VV3yLHc2LzbDgiYiy8wJkrxU7hwMwQE5MSGEbvXs1CtvAY8oPNYzVDpZz9yPryGjwHUWc",
  "key11": "3aDoiKQZUwDNjdRN5oaVMHySUDYdE8HzN8H73wxcJroeDs2sPzTg7GRiaSdBX7s1AkZ7Fu7yfYphPwEAwnx2zyVv",
  "key12": "6t9bzZQBUFbVcdDYCyJaxwMPEy4fdCNwBU2cZG1LUQgYVGbJXFK3YQYnKcTP5avsdvFnZUWjwjYwTPjmdx4Vi2V",
  "key13": "3d1iW7n3UEGxWngmgihG1TiW18RGmf1isLJXLBToSSzTok5EzgTbpEhwm8gXrWUayixpACdFWA5ZeaD9uyTRcd6g",
  "key14": "3FAT1hiQbi2MeBedthBMiroMRz6JMptwsP2LV1c6VvqqrR6Qi33dTjVdpKpueRd77JXshWT6VPnQovYn9YNUdxXm",
  "key15": "2rrMmUWZRkv4mNgDhDEXZZX6xoLf7dmVKP5eSwUHgiSywrsUBFwumEw6Ke8RJN36bxgg2dyGZN7DoS1tvvs7Burw",
  "key16": "3wjGfaBR1TRUDPJxz45yQHVtLNpr6S6v9KG7D4vwnFTb9md7tg8R5hxsBwsZA72FHADDux9ASHeEbDSTwLtqxD5u",
  "key17": "5akUtysXSHnMWpEcfDUb3jRgzk4R7pkiKaMnrZ5ZvSbR1mNaCeQf9bCsfavokUjPQBiwa2cCAo5N55BkmmyVwxp3",
  "key18": "dkWNaon9PWE8qwNE9gu51Q3BkTdDXdL1XUunmtz9hJ2uBgLkorquFxsGtss6zqXCoG9WEgymLqizdw5Qm9UUYEU",
  "key19": "5b5FnTUeME6m7mn6AF4ngYYZNHDEA2UNYWta5pnymm39hw9mT2571YQcvK5TAcnUpLrMp4mdwy21gNvH7ezDSdDZ",
  "key20": "4go7tMRWVCqv5HR915ogjkJ2sgFTPaSPKA8h7o94GXhSbFPmN71EArft4GDCPTz9Aicn7coBGya1E4QvLsmMaNXp",
  "key21": "2w55TX9yh88q7vUCR4a94ivcCPHUZZp73wXAxxgmJFstzGGtV1rCHm3E5mcdmA849UPuMjdVJRid8uCRoBBpPpjL",
  "key22": "2FZVMKnN5rGxiNVeFLp12iqgrsxwizjuobHCJr5jefoEbGyxP64UuaKLLmEVmw3y5EcEgY4jFgBcnBm7jPscro3a",
  "key23": "5d5VEBKrjpWa9M9SBECw4Gy5Qg5CenhH2NMhSfGykwayrPrbENdEimV1cn5WLQySqFYeJjERqq8cgHcm9foEa2Vo",
  "key24": "SjLmxWxeJWSFC4iDeyeJixq1Wa8jndEt77tt7UA4KTuEhaD6QP7G7TtzuVVp2fLqMP1PSBczpwmTow3DSaMtDDz",
  "key25": "35v3WnUxwm5MNZRdEwtgkD72C8HPZ75wmsbRkfGbUaQT2Ab71ddMTyijqMWngjHGzk3rw8GU5xwZpZ5qVbkwV3Xw",
  "key26": "44KMdotSo3MYGycBNjhW9BM3Ukp1GGz8pPZGawkzNbfCyXr1BiKaTNaczK5kDXfvHYETwGnEqopvHXMyG7Wr2gB2",
  "key27": "4R5kY62Z6m7EueC9X1KxdNtsHUYwKWzUvLQNd8Ex1GTPFsG85CW25LvEp61V9pqGAKat9phEz1vyvPpbdezfjiEY",
  "key28": "37HLWrHwnV8Ks44LPeKneEndavLHor5CMkSF9cZQUR8c3jfoBoiG7mGJEpGV2byUWZMZZgjyfejwadTSYPGTe34",
  "key29": "3iA1V8WoY57pf47Q1FNSq64HawzCgjYZDCEvpVeqnKbizPhKFjXoaNpsXnL2cG4iAgvgHbiwnwvwb5AhbWnQwUuD",
  "key30": "5bfVsgLohx6TVjDecnQVyXFEt6tw2rraXFkD2kiTJK2X3YDScGnZFBUcp2wtQy4C2uYEBFZf9nmo8r8K7EQXsF7t",
  "key31": "3NEBUGYc2pkktkXoe6B1MKrHojAivreUhykmUiDiXvqo5rGrgXHmiYmbikL5FhS8doBmXg5YGakGgvc1zzs88AL7"
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
