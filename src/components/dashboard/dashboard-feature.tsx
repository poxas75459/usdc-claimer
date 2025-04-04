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
    "3wzFpSStANcEWC5V8AXLRttnXPWVnD9dfqzNpD3sbZiw6Hpm71yPe41VwSDD32z5GPjJm5SqaUxgKrijCDNEwDDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3sNpPiGGA9uDKdQjC9wD5peVJzw9MfdER8DLAHhFcamR8WFkWKcbz32gLCNR1krXfW7pMoNMDdoWNYzseKFpmi",
  "key1": "YMEjSasHVGMf7LbnoSo8DvPaQXgc5UCaEYo8oBTjXwYBWJ2dMkHJixr8Mmnnjjp7gzbvfWqYboZYA6AiJRCtfQr",
  "key2": "q7mbsQAbH6Epk4TH3qorZCY9woYHRhJnMmcqwo9wzzdStXipULRsxd5mRrMyaJjm1yMdWu6Gf627z6g1YA2pLAC",
  "key3": "5yXKk1Jd1ksUPXcSAoogA5K42NHJoDrYzPxfBKCucTYa7CnPNupjPNcFiWkrWJ3ZF7uDNNzfAUUGenAKpsxf8hkP",
  "key4": "4rFengTSpFVX1bEnKKTdXqXt3F6fVXKr5k3juw85Wzb4wPoTBiqGDjyPr2FRpbdrLNCP8nUanQdEBCr5bJcYMgYp",
  "key5": "2AcbkduQxMH3Xb8x16eBEzGGkVvXy4esepcWb4yR13pm6tyVQpkueSo2q5brHCnRSC47rbzVLJMEFTQxf7RYwb2m",
  "key6": "BPtgRJQ9LmeAASULTKDJR1ajDoZxnT4bgDpGfayBPmJjviujMhoG6U1ypSAUCLQpvPjTgcCcWw9FKgPdDdDB1kg",
  "key7": "5GtChgsb4Fd5jByniRLNrTV2mzkVveaoMQmGeNGuLhRZQm9xrWr9i9SSGxhJUCTBJz9cMKsYrJ8MU8qEFzE7Aigc",
  "key8": "4wkhj2N6rpeLVzmppjvCfQScVSe36uEBTHkhBaLeJHZNxxwjzDXibU8yuYecn2iDuhThF6xWWfFquf6wX68CRNAp",
  "key9": "4xq6yNxDm5S8CmNBAnHpK7mJxLvATi3zsB4g888QEBxp27pY8Ta4295s1ihx5d7C6nhq4GGkRAKVJmQua4oSeDkr",
  "key10": "3F386c5MZZsUos6unD8mBdTo8G23Uu9LwnB7fFAFf6w49NppC1kF6zXgeFnReejUZpwag6Ru98jfp6hTgqWsFm19",
  "key11": "5EY2RP32qJKzbE5C7gvPnmsie3xnjDg2Dw8VmNLYejqHR1mj9bPV6F53VDEQnnz6tvxMswB3x3j5i4rxa3dUYpFn",
  "key12": "2KC5iL15M5HrPXf1En3LysM6qXxxoJwB8AAH5furVHxzkbrxsGTQRdFzmRVu55jRi49AZK3SZxKZ7yDa7rLqkd1u",
  "key13": "5qVweXGcWpMQ48FSjuty4we1RXahxRfV7MmyC13aFe57P6shDugf8ZeFtzw4o8ZnmYxENDKyU2GhnnEeGvJy4GDS",
  "key14": "2BtW27HUSZnPtzpZ4RzkaHg79e2nPVkrRBDpxxNoAq76kZZmPDbYnvf63jKqgkPwfQhxAV1iU2rZSg7iuonJ93f1",
  "key15": "3vK1Fxe1ExCeoESWipAXGJoy5HjB6c2ZtjG1kKgLf7Lgy1BdjsHbTpcnUUp7upEqSCP79wGPBGdsKRLgaQzBfv98",
  "key16": "5PBgbKJB48aqCVQpwABk7DP1BcqqwDaVWAscB2JbpEWgEkoTG8LcMCqazVgg6rqpk4aDAELbHCZj7gSFgwM9fR5X",
  "key17": "G6dzA8zHjeTzgewzbZuWJh1Vf3uTbb4ouijayK8L3XdDdKsvfnt9wWPqzXMSXazDNJrRtnmKYbJmBaDvHA8LpMt",
  "key18": "4Dzng5HTsQq7BbmHepkhsHkWBFZCywTQ58ERg3rU8DhFmKh3366H1UrYzvyiCPR32i6mi1cgs83dfUjcDpd7W7mN",
  "key19": "4DWAduCenh4VRsauWeSDXMovXrrnhAWriX4gjf2ukjurnaoLAnDRGW6qZXASb8Mu9h4RecoSbUqtj4DgNgCgH596",
  "key20": "2YoNxsuHgoQrAom79dYy2uFLfeLaGMQ33xzF8Q6gy5rs9vDJ6x361EB9BmF2eM34H2stw7BmBaYBaEFVX8J2t4An",
  "key21": "2bGRA7g77n2SBZhc2E8pAru4GoNmcTkAtFaLQFeZF5a8kjNfcw3ZvJdX4TCCBKjk9Hjhjg5dm6Qemui5xwoZCJ7c",
  "key22": "5D1rRKAyj6XnrRMjBfTP2fC2AGXHJZQaigRJDnTCq3zs7GM5eSruYvVAcQLLbyZCcg9FWWNbRN99Ghn4YmLQQsSq",
  "key23": "4EzNAfNjBArSWi1LNyxqxs8A3XRhXUrEdE2sU4AvhtUDLTM7XkT6iGD3SMk28oZLRQx9LrWqBo8FJsyYp9hkUuBL",
  "key24": "3WSGmibmW4GTKZmURZAdKPgPbt3q1j7uKSeVFeU4geGm7KHLwvv62Uku1KBPnHz92xojAtgVEKKuujMU7r7m1jQU",
  "key25": "3ZqF3otnjq6tYEYWebvgF4ngKA5wSDjVRKw2pUcn1Kqbaot5dyc76aS8zm6bxXtztdekM5b8dvFsg4PLci3Heu72",
  "key26": "3n2sFPKJBQMwcLtzT1Gdme6QxChBWX6SLsMLsR7phV28LGPPDfDnaCco7WF4ov1rv5DDX75wTf9QMWqRQHw9AMWj",
  "key27": "2Mbrd4iL5Kj47fQLiVVAU5QqC1PqQC6BLfbi5B8VjqKUTieEiFETvLANitYZnMqQcBo4YXa24SRxoW7foF2oVRAk",
  "key28": "5Xb4i3R9sqD4hryj6ykzpTbvvPhHPShLZjLrhH2CfcsBcuF5BnexeRqUTUUH3EdWHr6g2XdvscdCXFC3gmECNHGS",
  "key29": "AW2PRyGrtCd8ssJfSP9koTFpJUGnRsWvQ6KZFLXVWmby6qMMVknNoXhadr9i89e9Ni35GsukXkWxL8t1XJ7PEss"
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
