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
    "2Z16sDuLzs9XDGGsWen3BWhYpV8N32oEuEBUcX97hvTb2Ms8xYfazjfS4DQ3A47sULGmztd9ZjLnEvMVEM8yDF6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q2NTmQKykd4q7AA1wwydvjyc5t2Qg621DxcUypNrvFpTFZsZZRKyZAPPX9aZ2D1QDmso2MSBBCWr364s5AKnkvg",
  "key1": "4u32FXEGZ78A1ezi3mzfrCqs8w8yehRWNsNdFJeVgBgZe8hkBYHr9M2nQQkRpv88dgfXWeU2CywmJ75CnUpSYam8",
  "key2": "2dUARgYeed3B37Yw234Rm7UZUhoTdofu54JTT3pW8emzKBkmCT5qULWFb7CTxH6sb2hqRfvfp6W9YnGoYYUcUBWN",
  "key3": "5jV4qeFhCNSaxiHqwx4CtaMyWNcpaNrHhruTp5DUPtX7d1Yfmx2kseXog3sedHWfsiTY67HyW4bJ6tAjnyg48d7o",
  "key4": "qeVFgWUumXN3G4CRVatWqsfMqjXdoymdFcu37GUg9N4dKR3bXgq5buM3BLsBBFgRyT1nmH5bJXnMR3H3RjtfKCi",
  "key5": "56a3J4R8KHG2R6CxS14VvRNVggZ2LvhNtpdcCTcvFxq1JmwStB7P5qNp8V4aBtaW2rdNVKrYnLCj5QiAX5cqnN4D",
  "key6": "63225MzCirmc5qkgBL8Pz5djwBfsMguKCRPP5T8mfkUmxh5W4FzkoBfYjzSKuzdDpRt7se9UhumwSQmETwnT8jgf",
  "key7": "5FuR4UPnXckuAQ5WRJmzUaYUDbxPVMDrjRcM3mDpzGN95o7HNQAMqGs4Ky1phcx8qfQY5gN9bvFyEamxkeY3sgbU",
  "key8": "4MeLbEPeQXVy46VHKFy58s7HtbTmkytYVtsEnDNorhD34E3PbrcC41oB4uYg5eUerktoxjCKJSry3f8g7tpundqQ",
  "key9": "3GLWGUhrarBP4xEVdhxvLFe2nwAefJmktvMp8odwCGPEC44f1tjWdemQsgMi4A1g7ip7aHeasDsDCrtcRQ1iNKBh",
  "key10": "2qVgTDtFdVmSXdn3Fj6X4T6CEJjAs76dKiTPLnsgUiHhe5TJb9vUvV9FjQGSeUNrjz3ivPCgHD3TWbQs2RCqzrdb",
  "key11": "KAcw8D3ozEvVX25SsBH8bzefJ6icQAzj7rJpB1Z71pGEfzmjXspoB8LbiYCJ9ER4cS1heiymJufiVGG3cVCMzdW",
  "key12": "4FwZdjAcrHJHfTP7d7XMajzbdgmNGpHFcVY3Qu8BKbwNc1GieSScgyJ6bukpf57foFqfNX4xcN3aYQoZn18jTfaD",
  "key13": "vvEBZHHkjKe71mLGn3EY4B5k2YApGaX5vbsVsKtumhRN5zbJ9K2AAugUEviEjrMQjLA2j3NCdu7R44DFHSkQkAz",
  "key14": "3ZuBpawDzY2raKRgH6duqrxRgMYsHV8BNBsrUJifgihHEkuSeJAxkHAJHQwsh6dKjkYw1GTW4KcGEsd7bs1gzWjV",
  "key15": "5x7ygdCo1fWPMtyhe2DEvn4EAbnSJ169gnjzWiFtmwWNMP7ArDETK3q9dU1jkqja2t2cuobsPVGuqVSu7prc6A9Z",
  "key16": "43BDYZHrB3hASx8WFesL7uqkDCWPsFqNYKNvpRioZfr9BF7UeSHSmQZQEWyX2YsRUfRyew75mFChREPxEebZN8A1",
  "key17": "2CZZ6dEjvmmFLfy6D3V2bwivwc1iuiJGdEmvi2zC1q36jAQF5tafBu2UPD2wqejeT5wvJ8Y1miRBxwGQqXroeCfo",
  "key18": "5BqwjinT3FoV6c5UT7kNCJ5HbuLtHfMfkV8dYwwpkwyMGwNdU6YaVquKeWcY2GQ8sVpqosA8ugxsasR1E8BjFiao",
  "key19": "29fr7QUoCLDVfbpakXz46a4FfEpgbkWxLPmKq7v9MbnXRA3PB6Lwn9b8iBtkFsb8NKFAGJ7QYphS8ZLb5uoyzcXi",
  "key20": "G4mdnFYBwyovQJZSfUqpSC4t2pNkHt2HzFcXoEVpt2sxXk9Dag38dNJT6oTFN5oAKhpxnPb5CcrWeaKgmCxifgZ",
  "key21": "2ft2VRBT3GVmKjjPc3oyQN5Y4HasrMKQfg8yZCRCGb9eHEGjncBbvqUntFEDRZceiMehayZY5ZsAccd2DYNrW2D5",
  "key22": "owKD2TT4K49Rgrcs67bj43VvduYnm1Fh8QczjHYkypAiGRevCiBUE1poa5B2zVRxzNmagz6JuUAwZ4wQTsD17o2",
  "key23": "My9kdt4uiyrAQ1DcLxy5yLXQhAgHzdKPyjwtcEkihShCGvSfzbxfRtSPCocyiMLjSoZMpEWZvhXUVoJVdW8hdS9",
  "key24": "33uEU4hv3nt1nAvjr3zunB6gfkT6TFnqyTrDXsVTHRn3DZ9RpZ1oQoY9vaVtzASbEk5w3yUxb5AR2CSkyAj8Tp8C",
  "key25": "4uxR6fDnV1xHnam8Jc8aGeYdxSzzY6Xd1iiQbPSJEZqszrUyPfDYDfj1TDifzhtLoF6ZWMzFUoavce72tMnqxMXr",
  "key26": "54AQ7qzNDzXy2XpNbnew9kZRrfawK3QKsSoP8WcPqDEHuvkUnXTtcfvQG8dsHHRaRyQVrPsehzcadjonGbBo4A7X",
  "key27": "59PHHvU88fJHciaa5MbwHuop5GifyGso2auj1tMnWwBYySxbWGm7jHXPuUtoLcTSGLtzZ3J68S1AM5sTVjKZMx4P"
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
