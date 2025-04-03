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
    "SYPXYPkomwyeiwERJknVv7bXYuaSryWkKCGietfYrLEXGMwrzivku7zh5RqucfAnNf8Z4agav5zMhrY7Ev8eaYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51MSzkZgLy1q1tEBM8y5Bowxv7xKaWCPbRBv2yA4QkVqMb96Mf9qh5VJGGjh7TkNDQVVARfo3G4vjWWgpmcKGCoU",
  "key1": "3kfpy8x8MS1hLGCWqncKc8ccdyC932j5K9mg9yoiKMi1HiqbVH7EdBnfAqvL3cLNB8aTSgw7Bd7enjVt9ox84uJB",
  "key2": "4StCtyxvkBM2xcXnDPXW21ZoKydZqwmPkRn2Y7MyGkXLGFZGginnyD86aGm3idNC1MRMr4uLVjkfhqNdV2hf4E9a",
  "key3": "ZuvCTa19Q3RSEPktkiP4MkA3iz4WFh1DQMgzjQM7XQXd2R9u6LsoWd2GQnGiPhHWHzUR7kZPrn74x3zFR4MCFMp",
  "key4": "2uaLwoLPAYA1djKGkrTz1seuSgVYaHfVrGTPsnbCS9z5Eae7p4Xs3ynwTVXGsTsdSsLfRzUvbcMPRr7yahMT78P5",
  "key5": "4fTZ8d65FkUwtoEeeDcgriyAVqDSt5LCvksF3XMhbH5La3qQSpPvSCFZCKBJ19tPxDBnB8oQjs3D21zHKRdZ1f9s",
  "key6": "4MZEfRHh5JShdSdGsJEUijQpqb14udgEoW4eVQFKeyCyNu25Rm1d4pygPtVNWf4U6csicUcDVfGN4UnKnU2Rn5e5",
  "key7": "2Qork5woUCsh8RfNWsGuZMSRdoKg57AavYR737W5zETcAq7SsFRjTvb5Dynaa6DuLb2DfPb5SLz71aSUQUtnpNer",
  "key8": "4tX1KN3ByPmt1kcc4nhKdnVz6Gg5zryGQ19RU7o3cqnAssFHcpW1c2hdbmNFXw3WFBzmT5nzmh821J84NV7vTtAZ",
  "key9": "S7MtqckGX3Cd1q9j6TxHjiPXzJKmUsyoJkPppQNuMA2htFW7JSez3n9EaoJHxiu8FxAohYEBz5JSpThn6wr55ay",
  "key10": "2YTqNkabafovHKJfLniE8a9vCUParCU21CgJ3GFd3X4pFsCYCFz1n1Zf7iWi9zCL5r64KFdPFa7Y66YB7bQT5zQZ",
  "key11": "9QraeKmGDGf1TszKQNF89qhiPVFGz115smkfRN1sWQoXPSVUNPurYFTUD65btyAbtRB9mqfxbuqSnCEVmiyCu4U",
  "key12": "5BUeNH3AEEv88nNfWd8rXTdDgpzgHTF62NFGhxX5nN77dG6qehQAnqN97EdWnyTY79LHCifwcaS2X6iEpxkSdeph",
  "key13": "55CuJpNE5JbqgaeGMicY59C1thzxvWwhS2TcAxfD84LerYErNAKdah34k4Y8C1Dw994Jbbq7jfhQK42HLcvAShgx",
  "key14": "4TqUuwn9u7E5PTzAxL2Kg1yuBSLYVoWrFN2bK5exdkjySrLHM9aWaMcm4xat5Pi8TpNMhsJEBmgpnxkfRdS7AYm1",
  "key15": "UnLyUWqT9nUaZZLibLdtowiKKNudgVsw7dEUtgABqoDXTFzZ4vsUvVzKYZjdGd2Uo3PEWAPL8ECvt58LXUvwxQv",
  "key16": "4SaGazgsw2nKFHsSgJDxd3pbjo8QQB8Wmrd57KPawP5Cn5yEMcv2SYKnd4bLWj6TfJLrJSBXUWn4d6ab2Me71ske",
  "key17": "4ApdpEhgTMb5arbX3LuU81CzvygJpBRkfiHXy7Q3dLAJvaYtfLMcvMXUuwW9HnbFBmj3fDXQNq88kYsUF4oxSx6i",
  "key18": "2Q4KRC3soresSJKT21wZm2YGQ5NzfJxW8ExmMKmC84agYmnjCaaGRPrJXYXN3eEswFYWTgKsCG6V9UBHTDPytY8V",
  "key19": "4SaTxhpWVxFiKSY62PyLZc5SQ915zAHVL1q8aPtHx8ne6S93mykALwXHbtkkh445Fyd3KKc2ddoJ5sRaC9mGFigu",
  "key20": "sDJYaSQGj8pPsoP2XjgzTp9SbRtrTQfLYqvCGcg3jPZYzbgvJcJN7xPmgRxzuxwgDPmbBM7Hv1d9scNwewTmHgs",
  "key21": "62edzhAG7MiiDDUBMeuKSjBynQpmtqKwTJZGw76Uejf9jDMejKUH61YQeV14qnR5HmUb11PjQD3iSBdM4K71naK9",
  "key22": "3HY4Gz84uJhvkXw9GLpepnYhg1eZ7DA2FbJEndUwc36sFuWVoHDLaqsTxNCmZZS2WufwiWp8rHv9MVihCRxQMKpF",
  "key23": "3f9dwgDuXfHxrbHMQMvR12VHrMRXmnoK5gToovqBVeWeQ6DDETnQWMQC1uH8WHP1J7rNLAX6KFi4jNVp5SUxDQSK",
  "key24": "62r5wwhpWo1XSwHmvpcxcR6Urffm8CsoQcazwsbDMDF8oSdwkU9VnFqjn1fnCznmiJRDvy4EzKwcfWaNCeFEph7z",
  "key25": "ufUtxLfVHYjbLrJ283dGNWL8xaUqRMcYFzSVJaAUQbRHHvr7v5smeYpifwrjDNBAcs4gn6qvYNgrn3Jqu3GLDev",
  "key26": "3K49Hm9Uiu7dxRG5zDWoUxiq82wBuGCFDx9DaZRCKu3X1VFmmmsp3hY6efJurWpmXf71KP7HVBRtaK1iA5SzwKBT",
  "key27": "3xsCB2WFT1h52v6eZpmXEQhF8yyuwTn3gAKZdK64cKvrjgd31T5GXbZdVHrRpNXjC83M6JH18eErP1hoS4UFVxbF"
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
