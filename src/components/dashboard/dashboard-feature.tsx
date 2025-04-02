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
    "3Eov7phk5bXHzdaA4WcVLnukUhJ4vfMbbAQiyghVtKSLJBDmiaDh8WQbkrEy8qEfHbJzabMMR81YVBKHc12FgFx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uwrLMxJuiKptsL4nEXxyP5GTuUYEm6d1nFQ8TpGmLK26hvL5Qh3EGkaRbVuXJ1kKBj4H1AkzDuJNWrx8oExmSRi",
  "key1": "6oVidDr8bNFKtk8Wk8Y6o9Pwd7tegqBcvHiGuwEo5YeLF8GqzGxroyLZNApCwgKK6TEzFMcGoVr9isYNktQYBzX",
  "key2": "3YcBsEtJswNyEVTKrw9mXiCh65NezhxXccMHF7ATjpECfZyJF3vUe7QRPEqRzTaA3zzTXLHXeCcjfWmeEHBMmXsA",
  "key3": "4yqmcYYzHcJYjEEaa3bZgGvuSkP9LHKBAKyt9BU2QNiV9Jxs5LyCoBhr3CiAEr9fevfwzPp2TrNwub4NkPXApQR9",
  "key4": "3yNr5iFBUQ4UfqhXhDmiXWwJGTdNZNxgYLhbGQ2U34KZkEAcZyndYcjM11qECKR4UshMbGfz4TxCwW86e7drH11z",
  "key5": "3hLuVPwTvb5UBAwB6xNR13FfBxA1smnXRbESmc5XVRGuVWJHyEc6BxFq4T5BdjMjDkuoqCcygb1vu28MZngQaY8p",
  "key6": "3afAPrxhkCccidkMaQxN1vC7FEZMi3eF21j5c1S3uYJBSfx3z6c2t3G8MhXgnPxY4M8D1KoBK8dvbCWv1Y2ps44z",
  "key7": "2Ruadv9ucdiFqAFwZY3Cp3oZeeeXSLDqd9qadzzaKxfGrcJDa8FzNMydcpA9kW87ETwtaKjiMCdA5puRGdJZAbCF",
  "key8": "2Tno9ZTuw6nrCTnUKkMcZQ6y7KqfXYVpkMY9Z9L2CC19AXF9R6wCiyA3KDWmaPXSnU3XfZeanSC87RXGdTejhm4N",
  "key9": "2o2pPkz1e2LcTEX7SdyDk6MbZeJUPc9aYLBXj2JQSWoja83A1f1R4PVnJJk3DHMCmtMfMjxeGFteRSrde7MVcZ6Q",
  "key10": "62W68k37J5iJ5y867Lqhggf6rR7VLnhkXQgq1XXqSRuFrdy8NJfqGbcMvET2cwNJRSPYhL7scSxzBZ3T2iknaLJT",
  "key11": "5KZ7hLQVyovds9Z1ivdiR3sgLMm9eMiR6gtNNbcAWsqtNCos79V2TZ9v2TvEAugjKcZpeKba7FUGjb42rJuaZFj2",
  "key12": "ShLFNaMBswSGrdMHWoTGPHNm4rVSCMn8JKjZNb3pwqT1EPb8QhvgHWo88YZkBn3k5Y4iNzwCNxbSVogxUTTwQRw",
  "key13": "4z9uw4wYynyvXZ8BoFiHWct2cEVgXSeWJs9xQJVg9EMaJme2M3MbrL3G8gvn8MtUQyKr2MFTE2w9ASN4WdT7gzM3",
  "key14": "49AmWZinS2RzWbomjD29XxiBDZ6UNPMYSP6XFEG6DgWgK5x7dzbhDh6ajj7B75wRsBAPAdpnmX9KMaxR7K9DjVKw",
  "key15": "5aXqB175G1okxrmnsacZGfyWSR2f4Eof79PLCNcmdvEcEpVCwWjnDQQdpaU4Zc1yfwwQ7ih5ZU8ffDisrDodFkiD",
  "key16": "2mLFQCWirCbwpCvXpF84zfmzWAWBLYmrFo39dKEbE7PAETeRPwgYo6aa5KeFgVHRL3ULQtuwaSkFFY6RX2Ui2KFG",
  "key17": "5rWBqMuwoC59MTsbmi57joqcrX2jH5K8Tw7ttd61SfaQmPH1iT9qxbo2CSP9cfWMyLpBQA2eqGXBipV4iZAJ1enR",
  "key18": "243Kb94rcpyJGiC2H5oPy15gTK9HyHBpUeZNM2tM5ZbYcLZGqnB5i9zjGGt2xDrbGK4AvNvqYNs28M2oED5H1bQ6",
  "key19": "K8km4eR3CiWrnHdAyaBnhT8f3VB3ckZf8ijrJZUooP7Qok8EXjjt4k1eXnftpECmQwx7kG288vhkqojmUTuAUcX",
  "key20": "k9HRTB3GPTzPC35PbKcZeL5hms1RDYUeA1q21NCHGsfXxCioz83Wg4mP3dJrmp1ijTrxiPHnCqHeTScBgj1Fzyn",
  "key21": "5emnRk8KzEAfdt2Rtim9G4KzksXCHeSysPpFHvssopNAEJSgacXnKPc4Em9DvbJaDGFMwx49dZb7fKe4C57jW6uw",
  "key22": "k57ZHori9ovLbRcGj4x7LxM9J6wakNFooYekQ5mETZpquejjdF41ARthBfj5LzLFHbiCmVcPHX5tgLWsyiEtW1o",
  "key23": "3tytu4ym2GMAcsBBYZEfNjnrCDmbGnm6XGQr29K6sFxbgv34GBfuU7RUyKYAFv1uunu8myeoBK2pJto9SG2uNGkx",
  "key24": "5R6Ch3CrTD8vN9KQNTVJ5BZCTYo955heYnfbkzLMNP9QfGW9nvq1d25rH5xdTnn3DngxiELctS51qbjVBUeDhwtQ",
  "key25": "54Cgxq3TPxiedaysgG9836vr3rDtySCNnvv1nRcbrsAC52i2rTyCH7yypoWRHorMQmAS3qX1ujde74PtCcpaVss7",
  "key26": "4oUuM2o69HX1spwbddZUeHsuw6pmWMM6QZDuwsxkSzuhmr4LP8D8nKTTHJnRn5eFijFwZep9Qx6zEsZDgHjS4cXS",
  "key27": "2QhVzk143jXW21ughq836JLJFPEZ76sjxyfUjQwh3wiGAs1pBTamv3zrtR7vwFJmbTCnLtB4HzwXmAFDzqV1GFPy"
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
