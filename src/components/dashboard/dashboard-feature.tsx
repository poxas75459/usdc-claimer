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
    "2m1TS7coqU7oy6Y2XDLgX1Lxsj6qecK7sLSSBCab5uXcgmJTcNHf95zaHKJa65QFbGYxtjGBvacbcinr5bY2gpNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JaafW8zkXTQKztUZSYHw5pUinAJadsBHHybZR8LBrHVGtrJ8zWsMkBGbupStzduPNVDTqCwfLw5JgBX7sPwoj7y",
  "key1": "46AHm9SigaLSKr1ptvhb9JQ2pz7AxVdtZDkgLvVJc5L9aXXrGnkzKqf8f6kxLGnrUwVEJ24m8vgyLaUztFdQ9mbK",
  "key2": "3jUdDCtkK1dL2A3m8GCiaa8eiZaFvPe5afbR27VewfJ5PjBN3Mx7d4qjDs25KTtCZLop6ngDmvxTefPsF1kXoDVA",
  "key3": "3yqtpafUPV6B1GvCpmB5TZf6kW7Xm51HUBCU9mU3sD5iGSUSHoBJs4kHCaa1xwidDqNWn4ChAEDUMwpwhheQXJx6",
  "key4": "3Rw2oUSiabYcpGuu4BtDKr26Bvv6tUMoAaKAjAbShUGM1UHWxirJS8dVW4PQxGVQovgZmPm6idjcbxrSpaqjyzgK",
  "key5": "cZTAHLYd1Lm5pSPAzxzSHSnvm36Ye5Pd3DYDXHPceU39BqqdX5xD29aUnpQQorUQwDBywPdEemZAs2BrCEY9tjT",
  "key6": "2EkR5cgQoihstEYUsXSR1HAfitHpT8Emyt6yMSQxh9SCHucNzj3b489HBrBM1e3rbgBTjumEfvj5woYpiXKz9J8T",
  "key7": "2vr8NMNC1jRwkxesMy95XhKs9oVK5eyR6MNmG3V7jpMRX2zfyZo4GfmT6pByHqfGmQbYV2S3ukPRnJ94fXdTXaWG",
  "key8": "25Un3qk4gTr8L8ot3MMiVG7N95RruqCwXb793gDzMNYqXUPyCxxPxycpsiVeiHJd17cDvq8HRPVX6chT7y45yqzt",
  "key9": "4PCVbF8qh3irwg5xXJmxmSyRmnMnDWowuDYsYf22z4KrHVBX5tkqp9vzg6pPUxnLAudRRfA8nwn3MGouRfYKj25r",
  "key10": "25h6qyS974DhpnsPksJqjwG1wG7vQxuudYsuLBgegtcZciZJxSkMff3e1FdRzc9hCp1xyVWoXMNFTBXkJiQAFDs3",
  "key11": "Ut75i6yvz6gQA3KYUVo61R25R3EvtAhat4jDQdvWgRXEbvvS11RR3y3wdpEFgDxX1WLxm82JSckZbtJ16Fw6TGW",
  "key12": "WXBYiZwaE2RoUv3yndWdmX9zs2djKqPZG9aaixpkUiJN9u5U9PSU7kwLFgNCEXpU2ndLGvLsTQazU4QDvucvnGj",
  "key13": "5SwycM7eQaqPpm1Wiq1dRjL9GRnsCT8x9efT79WfDJ94Frtrq5gs5qTbHek8dvc7UogQP8ZnGADhTtzPhJQguSiR",
  "key14": "4PLs9LqpLWJuh1JQEbwjdvY4cSE4Vcwoun7mxY6ML1LJw3iYX8QYP3E5yn2V6q3vUiEeUjS7u3ESM2yHTwAkGdTu",
  "key15": "3bYWF43PoiF2n7o45NmjtpQAdKYSzzLy3RmHJ6NqQdTsRRHa9N3MLeygi4udVUitx53vHYr1m8hB8R12RfDm2j3x",
  "key16": "566ah4AmuYzXbmqciYzAeSpnSTKTqNZSaWd5rCAxVVZ9RgG1oJc43NAJHQGcHmUPZWoMv4vLEMLSaXnESmRH8CNu",
  "key17": "DaPCuxXp1QSrHQbkVQvA385wUqt5enfrCybPvqMrxnSfSvnJthB3vYDaNg3vr6c2RWMGhbgbvrS58wZdMbjLB7a",
  "key18": "2ah4eq936AEc7uvNyGLGFdfgTUSQ1J5KR1Ae59x9jmssLzVYSkCiE3SJwEum8roB8GeEaBuhAzz6BVMvCvJVmJtp",
  "key19": "496S8tfxdPmhgN2bysJfJQ4H7TzwAhya63nboJ3rKj9K1uJRpZfcG7Eo5PkvppyYs8GhaFk9qQBKYkeeYh1ttcrP",
  "key20": "3Ld2tmS8fVyLc4RxSz6FeGspUEQ3DJmh9XPRKqf3Zvfij3BN6sXx3joWKWiVgiXxsQYFbifwvDtyz6eWfbezeDdu",
  "key21": "4E3Jg3ZJfHGHsA6viNMLUgzX6PSVJiBeCwpmj4zCFiCbjws3GYjbnYJZS4f5pQnBySd3P8fhS5PK7msEPAhVYViS",
  "key22": "5A9Lp8GjoBqf7yS4qRzBvxneDyjZFBWQmC48Yo7rnyk6hKAeUSvNLtdeHFj9u7oeSzj732hAJa9dUpHxfwCeoxf6",
  "key23": "62LwY61GHtXW7xvMY7e4QATLLsa5LPABdmvsrP4ZNsyTsjiaD5BwuNr6E4ZrJrQdtYH72MqNYAGfT9HR4NxgK7UM",
  "key24": "2mymJq5LP8WcVCjG96kj79An8zsSNvnzdwbpivgrexAPHL8YUXeiNCcftbK7BsQkA4Ea56PwaEmJL8aoXqN3D6XX",
  "key25": "fRHbbm8jWaxTF3AqM1HgPvADKNAvWr6F7uMfPbqBL5GvsqqduAAJfA36RnR2xjiFih6zHEyRMpgGxHpqdPu6wJ8",
  "key26": "23Vh33NWWXwE7Y1qBCdVipKJy6c24g4PMe6kR4Hh8ANW5YWiU4cBBWYnh5BrWwUGzv4huUsDQWnKRbQQrd7zZLBk",
  "key27": "4uBGYBPdE8dgKPspvmhXHPV949rWYG1mWqcxPfsgUzGygXk31thEj64DpmJ7AVjEoN271upjXVrgouNCFNnb1Wk1"
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
