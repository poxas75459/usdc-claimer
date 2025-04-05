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
    "37LL1KhNiDue6abb6765JapJfbYZeCG1oasmeLFae52XX4HRDA8j52B67p6ntg5xW6neyWswMT1geEBFLET1Pzm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLcFaMzyZUWdtQjWVndgg3D2vhbRdsvJJZGt3pueWpasiCZVr7BjeXBK4hisCXK6fSsjqb9oNAwKYsUE6Y3e9Me",
  "key1": "3sxF2z9JVPot2cPJjVLbNi8W8DJMWkDDmMzuj5gjMMiYVoP7JQmsubJhyHFRVh4C7BW6aH4PovCVJfULzZkj7Ni8",
  "key2": "3cbNEnBPZCh2D5EFfhy9NwwZYMXNYDqXU9XSPRgMkQuUqKtsL5biSrx9FvK8oJD2pLekMNq7EHBMmfUgs4vhxUL6",
  "key3": "2HXWNj5D289Lo5dbxUgZQTeWh3cpLm36wsWKJi1f32uRv6DNANmv1Q7PxsHiXvHMdLndnSvQn7bwdPJzdyWzfeYn",
  "key4": "5ZtbN6qMkH8dFNzjJagPvk96W9iUZuTFW9QhCGxzioDAHakt5R1VKnKYuWVjbKweCUSpAZF8cuNmWTSVHe8H6htw",
  "key5": "4tSe3anJZkqeUQ4R7cyDSwwUs8dqaAusm2TVz1mRBp8b3DnQbLzi9w7HosU3YaxHFYWAqDJV8gKDo7VMfyduyyuv",
  "key6": "4A9ndHWMijyZTsLsjk9SNygehHvcgxrVFYKDy92EfLoJ8kcVB2wGmf5bFPrbeoiNgWbGNUoChfjFP1SWaxhK6biv",
  "key7": "2MVkm6NLCazAk2km87XnQQCfnQkVGte7ojmPbqcYzrYew523QWL7LctejKS2YCA4KPH7SFA6qyyVXUZFHvt43kgV",
  "key8": "67Ake8knBPcNdBHxybd98kM9B8hysCt9VkvGnMnj4v1YrM5szozUHz7fzoyWeFCdUCuyWdmRnXU6c719XKbjvFFE",
  "key9": "ACaEWCyPwf1zkadYVS2pApx11DTsHJUG6iPDU3T6mHyEHmPLjhgzP1CQj4EfpEQbBXpZe1Qix9g42pS7RDoh7nr",
  "key10": "2c5w7NVSXvLttGvQer2TT58rrW1KWELPFqcoWgCLabkAw5f5PwBTb35cjMUoVzdioGGBG3vrUL3VT8mEQYNbtwRS",
  "key11": "4xF38pzQUVzt26PuhEdjhPBmDNL486Pbu2erZ1K7t82pWWDmRzvN4aKEgdSTw8iTE9JBjqPrnX78FBo98BqvmTqY",
  "key12": "tdYaLwreBZ2KbCUDPPpYApyzezaiiEjH7eVuzoGs8hUY1Z1JrjpiDzWGhe1tqkBBwsZTDkecToE9FY1DfL7uTCx",
  "key13": "s9LvLX6UPNvftiTPwQ8N6MJYtxVfeUjsP9hS16Qvt6oaDCQszgaWjiPb2kksV3FR9VTj2gTEEUqDMjqhMeURtxn",
  "key14": "211iwtrxhedHLduEbGHW3qDJgiwhEPAXakEhHGNEphLc5eSx8cWodyJX5KiZegi93DXoqDZXBAXn6t1fe3UaboGD",
  "key15": "47Mj9UCqTDfEx9kNGqaCAUmUuHhL3a9n85PtCeNAp8WCaBrVxDkgyXzFYdM7MRBgeXKVAapxJfEDsg8dCYW3LAaT",
  "key16": "2EkorQ2yUa7rSen6eNWkiiVi84fYYgi96iaCf2dkeqrm6EGVDaeQTTr34GBWkv8XC6wk4RZeGvZDDRwuMUujSh1c",
  "key17": "3Kf6AGKyVHLNFp4DCUkwDcEf99mxVhW7nuT1sDLUNH774WS4mo3BvuWq6Pj7GyAB5hTVqthNhQbHbkN8h1cc1pwF",
  "key18": "5qk2S1oVX3MqjQJnDnh29LGcdUjnXe5aznwUfoDPxGhaKpowMe2gGX9np9fafHGjiz5fqtPnf6cXLgfAtkySkh4D",
  "key19": "2dmHdmsgQ6H9kuPkWQ5d1yvewe91xuwurP6sEC9nK7knG6PBrfhGfi8VsgnBMmGXSVtgic6dtgSUioWt5Pp2j9Gm",
  "key20": "3qrBecbSZvxYPevzhke4AHKYvpHGmwmxrr8zx9YDEJgtqck2wS1ygZw4a3kL5qi2SxbhYk3q9W6837YkNYJGT2tp",
  "key21": "4T6nsZ8jYh14Sw5bFxexinnYpK83rVerqSS2xh2ue1jKJAMzdZr16TWn3EhdYYe8pZ5aVxjWVBP4CuWrWCjfSkbe",
  "key22": "3ypS81qmFzx3KZ9GZRjj1ySyTgQ5Aeq7ewVZmS8jXZd5fvjQu7ubkQDQeVfBUT8H7osfbpUvyJF3eJYGfowm5vHC",
  "key23": "4jRKnRk3LGZDZF471zKmw2bUbWZwPbwVLMemdDCd87twFqzQa6Zj5TxETJBvAWrDynfM8dFAGWez1NjyimcfbLH3",
  "key24": "2wEWgewMm8cHihfV6ATrVeazg3frNHZnTPizyvBCBk5Uo7p7VzBP3YedrtUGb2E8TN1dKqbVgkQbznKrfJXatsN5",
  "key25": "2nXPuQU5nAz4mPoJyd1DW5TPqtJkuCS6GiYFQDaPW4ytiS2tmBuy8zT7i4UBsMPnwnLyabDYgKcuzz7wytZVjdcU",
  "key26": "4rS5o32ZPAihbErBQ4rmmwPxWHgpm9EuZ473v5NYp7ZKMyNcb1nCwayNjptfanuEGNEpM44FNe5z41yvVkYp2aSX",
  "key27": "2smtJ1xq8BjMFQzm2Ey6rvXqAA1QPi1KcKSKpZnkMwQG6p6NFyhe6U46BFBVBFUtQn874c6tRgP5EUGawsFhEUob",
  "key28": "4D3MKqVZwCq1Dkt9LD9FCath3s98FGbvTNchS5CNzdeDkjokoG7ZXhuwEpniwdfcai9aH25rZV3exPEfbW4HFuTC",
  "key29": "4pTCHcb7yYH1BrANUzEbiGrnwXJEUd3cWJnU7LvTVxSkvwA9vjMgU2nRpD7dBmGSCtz3FXnLEiiyDrn46VWS2nxV",
  "key30": "5jf5SdoFuBaShPdVHLCwNavmKLNohDdSeyiRpGJqyfC5StUNLVkvwN5iCr24UbAwP4MScZn3b1bbUyfP6y1otWYs",
  "key31": "5Y5Jcv2TcFFMGVDAbtsrDbuoxWy32M8DaUzSNXDCsuJF6X3R79AS6xfPU6c7rMUUAtYQ69ikpyG9bpctFpZZtG9z",
  "key32": "5XKhbcPLy5dvHLNEVVkcLfL79LpiZUmZefcFNnob3VYQaYEmfGfagtWCSDywU9zU2bC6hgCmtKRdCDqENXf8k9bd",
  "key33": "5KdK5JNQRbogAMWQ1g4rxMuFgcxjEWwurTBnTDs7CFtm6JwtUpCnTUoR1R2JRTZZu8cMnnhbztK7LG1HEVFMMHMK",
  "key34": "311Pe293wXRnqRhTdVRk9HesNWwECiSnKcMQ6crdKQJP6LSeiE6ffDJUV2MjX4UJ3DNghAZxTVY5A5SKtw7KG65W",
  "key35": "3CrG3rzRCiJ3ouxw7D6izcFTWXJnavWoP86VGtqU8y5HPkJAZZCfYiJCRyEwSyjg6nKvQ2yhZdnFmEZ7T9vELfds",
  "key36": "5bssr3Et1JCdo5AezPJZzKe7NWDBKyUDUhCt5iMJ5aHS8qrcoJrjT1aQPrKaUvDrubDtronaqwp4EL98DPY2w15H",
  "key37": "5xKbwkoKoQm3MYKUh6KsiFBFARAbYkRQ644FqDpYgRX4DeMwRDyiEmBEf2UXQZMkQHknETNpnVBBwQrv2yvx8gJM",
  "key38": "2peJFrBtbHpuNWV6359zZopyzeuuiKHJ53jpYMkP779JU2YKDWTu9xRdCBjBiYiNrRpUN3NmJ2i99ZryCxe2Eopx",
  "key39": "5w5JftL8SW9cs546HMu8e3n2nGrs9yWHDetJMabneFLrtK8xeAEngndbXAiCEV99SNKoSwhCCBy7RafTxzZ7GvvE",
  "key40": "ZszmXBmNAk8v3GSxtCyszgFMPrTRs1DvK499WKYTEKd32i3QQaDksxhuWWRNAin6jEjLh1apKj4Xp9CzUi87h9N",
  "key41": "45PUR9J8Rowkq5KcA6uek1LNKdVJ2weZUVdwBR54iW13gwmhQ4qakDRAKdyzCtKobH1ns1XC3TUHPEVcxfR1hDmd",
  "key42": "5gU8rJV3jXbaqKWJME7FymepgnJZFhng7FXbhYCLpSyJCN9KWWDKXyciz1oERkpgEgFQNX2TjkiEJNb2GTWiVVn2",
  "key43": "6KBXS4a7XUmZvq8hVHdffdk4CfWfXQTdjHBw8bA5K2MnN5hN1YnpL91noQmTKVELXbKgGye1hjMUVKttKNtTEWX",
  "key44": "vynuDR4HLkYniXDU264Z69NPwJfSfBZS2esjgRmmnSkJHuQ9FxwCrTnJwXZ788KYQxnRDLF2sJX6oDExX1db45C",
  "key45": "5fvHesCJLWqEtNjkwQiszdNkyz51R2ihMWr11SfPvtBBvZdUrMFq9GjtBA1ptQfDYwLT6oiRcM5Z5qRKQeHhU81B",
  "key46": "2iuMtWf1J87Tn2tE9dYqyJW1BXcfajHMukBjQz3Dutit9iDNZqQoceuTg9HPMFpdPMh4aewp5MPSBdTzhRiCbcaG",
  "key47": "2irpXq6EqwkKcXouqqiz6m3iofvF1j1uLo99B3RspZnA6yVcgWXPMDLHsV8uQwSmXkerNc9XPyCHeyiXiD98pYGr"
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
