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
    "nS6jwSz2C4khEorrMv3mUwW5WWiYuFcaGHdGLw7F8NkDHYmavgEi1kayYLRFBmUVttSPsYLNk1iXa26p5oWePyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9DyS9H218J7agxwDghn6p39CGyvyQbN74MCohPhrQzYaG1mtcXHasnWgHi1eC3LuLVxpAJWfuiDm8iDfMxEyP5",
  "key1": "4EPPiZsFr9ArD6Lz3e2yDBUrQ2YVJx8JBieSeUTASm8udZHc1WuAE3MFrL39oDmMboasfknmWWHTikFr2iA7YGXD",
  "key2": "5k2Zsa8kMuZope1jahbybocgmhqi4WnXNBXD5tMAyxQgk1iG4RpZNrZVKBVnCTw61wGTUcPTyDpGc9vHMmFFTHDS",
  "key3": "2sjpqnoRxUUMvLPm6J6VJDfBnQqC1u38Ehi88VrL1p7g2vNuz6SUBTAdfgoU4bQTkc4BN1oaa4SaVhKW63FNFwym",
  "key4": "5T96bLeGR65tjQtoNbk3i56PosnpY3to8M3w8VthFiEJ2EcWbkJEFRMCEw6berEEDKvjgJkiCiYdLjSrn1JbjcaM",
  "key5": "4gEPaUCyPzKmwHZkoqHxozFsgM9tj2c8iv8X2RuDDsxDupo3XpUxp6vGqXaiRrjzyqRicLwcgq9pFsgzKfWeF9jK",
  "key6": "2UMEJb5axsZ68f3cL2MHJLDH4qjrUUKH4C7esSB7PZXjUi8f5BmRK197qvidXCebQJrx8W8T4yv6CVV9ss5eFcB2",
  "key7": "39fSgmaXw6nKpbiZdzuEPXwNWNe3enN4QdiSrX2NuTtwcWLZktnE2pHMYXnxyiEUTAb2GRVWfQYha9cFUJRA2hto",
  "key8": "2XrBns6HtPZbyjv49jHPtY4A6rvkwSt9p3bmiKm5Kqy5dGShvzEcKz3BbYZqEeLuQfK4uBDMfbynP1u1QVCJAhc4",
  "key9": "3dfi9Vc66gig9fmFEnpKWKaWt66fgDBxjPfeUQWRrp4f1gocKHNBYJLa9PXEcDUdcVprdg7g8UsJyc2fi3pddzV7",
  "key10": "12MY4jAn9L2igvgjc2NMqEJ8qfcDibpnyghakR4p38U3A477ooorbnhBxmr1CmPMUMkNarGgZKtAhn2nWEzw8w9",
  "key11": "2PtbyTAWcqMReEUy16cDYLf2ExkEFCrtpLETcuco1LMueoWskJ9QtWg76GVmgVrwtZ8wLmgqa6woQH3E832ibbzT",
  "key12": "5hJKAZkBF8BoCX6Tcf95ivjfMKZ3NdF6gXLL2EFSan18i3TDhfZAkAEhqQL9dCURb97pZGPLBMfMpZQTHHbEqtAH",
  "key13": "4t3SbFBZQGngC8QywcwQ4sefBThGYxD5ezSAsGaMbF7pwShDr69Ywh1CcRfCgMNsEdoAq5DzgzqJX7WAbpHjrY7h",
  "key14": "3YpRa3zJoZprpc8xprsNA1aoiodqm6mij2cpHUZgBVUEQCjA9EvtpwB9pV4Py434q8iQE5Ngc8J1FabKn2S43tkH",
  "key15": "27WJvY6k6S6tNGVgExcSts6pDKnNzeeHdoRHGtq1h3c3qQ6zEVMH5Gz5boTryqwziaxVbJDhVZaVMevn1g9tLmPS",
  "key16": "xYZ5uoQDNeu3vvs5RrBLYT7ZmnG6Haa4rGQfiP1ucBWBNJNjzhPCWpGLXFg1TQ7TDSpm1b6JKJU3gZRSwaJNram",
  "key17": "5cEJRKThripY9Lt9jrDkAy6DyTM7p5zvZD6ozP2R9ZKzGPYWjrE7CLcuSvHYrufuT9VL8dLMAat5dhQywZYdE8Br",
  "key18": "2QwY2Rm277CmGGxkDzhWWQZZcKjg3py1YgJVJ3iRPTu16bJfFbhCpqCQ8w4Ty1Xq9tyowYRXp9BQKrrk384VbqN1",
  "key19": "daYD57JHvpwhh42GtaEigauFqKGbwfXNznaSFrxQSnoinccV7gnRCTAvPdr7VJra3qQ2STsh4KmiYkZprozDBWi",
  "key20": "2LgqQHGT9kDbkpdx6FHSgWBCLh8JhFJu8CPTbxmcvaEnWuFGDUYtLiw4xiyVcHF9GSTrAmJnEhhwnV7psH16fHRY",
  "key21": "S31m3DTsPTKcv5f9u8vEL9N3udso6MmqZePEHUqcF14siYJ3zckP64QiSuC3ByA2FYYL2p6gCvv6tkbeazpfjWC",
  "key22": "2u1NDE66HeBvMZgkiFPDSg4XYuvXCBDPVL7zqNsV42FNdkrUgYyEfWGdvKBtuQQS4NVnQyxGgXciE7mvb9dCPJav",
  "key23": "3ACeVd5EWBuRuhYN4Rj7XMUyQRg1KwVDSkhj1NKFH7eh3DpDJYk9VYfeFmJLXcWAszK9VyW35HRis88d7iqdQgwY",
  "key24": "4QCWC5roZ7446zdqWxwPZ4K7t2ibrnBd3Bk8XNjb2r1SfhMFYX5f6LUe4UA6W23jrmDH9bgDjMNSZEbcsK4Go6ea",
  "key25": "5k4D24iWq3jXvm7NVrjWADJFQwQiB1NHRR8pRkr2o8LC73Z2hkkXXNTJ3Dy5HFKDd69tvijK7Hf1AmJZJkLrKXEU",
  "key26": "5G2ojkWyXQmBMr3Xu6HCmPA9UnSnhCyzjQ5UtX4JpekPH8Y6tTZrXnkYjbpYSoqzAfFcjKAHjbed4SXzK2bXZdPr",
  "key27": "Yo7PuayGDGUpB4EG7LjXU5vhjZYMpnjRn74yBVSLsfjAXcTqDHvB3n8eKuwVpanxmX5sGJ3WgCkZxqawoF7SZm1",
  "key28": "3JATuvVFyzUy8i8vT31KfY8Frpz7bCupDfN4Cqrc15jNK8LsuiVGE27sUALavWAHoMRXCAuyAN4nRSChLsdhhN3K",
  "key29": "5e2MdAHybvwNWP3u78rS38VXepKVsxiRn7EnFP7cH1T99m5LEKhfG76wqZrTfQGtuQvVSgQodUo3HeFxmw2GxWiF",
  "key30": "KoVdZKxQxEiDtbghUX6HUATxENtHU9t5mJs9baasoFTjnLAuSVnbv672iB4n86ioSYzbwMifUyga8XkSLkL5d8D"
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
