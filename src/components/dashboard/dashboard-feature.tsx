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
    "4b1hu22CX8vJNX5YY9bPNq6XvMK5FRKDYVzEVt1zgjFki8oVQYHeFFrferW2wAPTr4CdNBXMvzK3PC2jUhPkinfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iEevEhrTFjC8W9PHfryRGidyi5j6JWSYbmkbrKod5m8gXkmrzj9bHRzcLLEWXG9YCVJZbxsTHp1Xj561K5d8GAh",
  "key1": "3ZDLnSFVdfC1vdWBmZY7CCd32wPxTiRyceAFTyBNdpY4TNU6exS1uHE89WtZUa6BDXjzA9NxUAnHRD7HEMJaFDqw",
  "key2": "27xTfTT5x7XbYASC3bJK4JP8FPwPwNwZ8DGAzxp4EtjJ9xepTUpbc7Uk4Uxrzu77ycMN3TSZPHZfw7dwsrqVKAsi",
  "key3": "2GQyiTWaTWuWhLpxrFk6iqU13R135Gm18HGLwH5rMYMEcGxEx62C8hC7SJi9k58AEYbKR5v9Kaq6UmGALTj7A645",
  "key4": "E8T4KE1bgNtpxnATRCF6k74z2QXjBWzzc4ve3zWpvvYMpcGCj5Fyqp5xSxR9J87oRcBJtwvwhHpgMVqGMRa7usH",
  "key5": "2Xh6pAmTCAghpTfU4PekuSy7hBEkRbV1vCq5jn2DuCJtjZqYcyCMQNNaPtzBHtCCGs48H2pUL1F65zBkN3T26MVa",
  "key6": "4CHnJUj1m6sDHP7PtMuZerAqo8cbLk3vPLX4Jc6GQaSMEMQjkHGCWYnQXRHdMRNnhqJxWmcQAz5oR3pCQRTcQeU6",
  "key7": "3vMwQU66XrmcSdnnekRv65FH1MHeJC6fK4qwo68HMVsesy8K5vVLcBr6Fi1LebukQpnZ5jeibh2SkFrKhpd1cBLU",
  "key8": "3khVcLGmYCvvLxeCzp5MkvWsf37vVjQBXjTNDAMUdbYHQeCUS1SRWdn2EdmmpVvyghsM5EPcgqiPfbuaKgcc27ge",
  "key9": "4sY8gN1oqnS1Wh2AhUidUrsJpaUSN8FffWhFWHKKhFJC72a21bqAqmsgqrSqy9LPLzMGaEeJessRjszZyaZLYf1T",
  "key10": "5518rL27jSqAArtwbUqznHyaajfqYqk8U14rAbXHM4hCg3Me4kkC1pPTeTaMMS41ktWN2b8buGvCRnEHBA2rrDLZ",
  "key11": "4A95vtg5NAj9EFkN9rj1rebYBXjhqkVxspCcy7JLQWDEdjSM2qLduY9H3iyHZGtFBwjNjFrjnDEbHFxjqCJBg87S",
  "key12": "4CNNi2jRh8gviG8bbzNjbFTnuin6tt9fdsXzzif2QQk1s24jv3LY4UkxntYKJzAPNGfnLoFMBvNHsqjfk94q28fr",
  "key13": "5NjYMzGEKV4U9NHmC2xUqSjP9TzPeZu6mDVJMd8ZTWbUfRtajGKfyx399VSMmrNsXQnEtGbk13CtpKSB52YnvTHC",
  "key14": "pXEWBLAEydUJghGkop83Z6vY8qWVAY7ZoPSUsu5LPgFc7nw174PxEHxRXnwn9Kj6MzEt3BP5wAcAbvqFEvhH12D",
  "key15": "iM4yQDn2sYstPzVUBqgByYY8gsev1byh5TTHJzbFAwdj5LgK9iZXub42CBaAb27RJs68snivcMR9mQFZ24CBfcn",
  "key16": "4DM57ViFJEhrfF5JoDgxNFX3j8YiiNqogEy2CZu7ryETuwNh73z4CEUTxPuSiyBm71QRTeNTPm8x92aWwA5aKYpu",
  "key17": "5XXNsmsFhU4yXywuRtvunw22tY1Bt1fLP9sc17bY8m2dVQyw2qW1zHAdPdNjRSHLXmTXeiCD61TWfiyrmpGPqz6q",
  "key18": "4TnvQriDopccQCd8TxeQ3gH61zMQSzbAb5jhDg9Fn8wmFjtzaSvGJ3LiSfKJgDBNeLfz2eWbrwja2Z8Da233SweN",
  "key19": "3Xyzv8kD7s4LsWtHkbcSus8cFXWL8S2hadjAnPpt9TLJSQym9UmptchMWYHTitxaLaHCLDGBnDHUBtdYFWDvarsf",
  "key20": "zWLSyRCmMupdEFMYj3krd9ULJF1JAXUh6vLDF1DEvcWqX31hKacdoDGmuNeNTfbT5y92K17YFhsUpnpkVJwaA5x",
  "key21": "2FHTUJY26yJpDP2taFLkqLkLqudnR1T9wZSJhF8dCj4GraCbNK34YsZHYR2BgaWeJSfNAemf8DQpRTDvbBWrit2f",
  "key22": "9aiz4bFBFRkhhWW3dCKqQUsuJVkrQG5aD11fZNg7jGrWYFyScuB9ALqKckwBUvvnY2TNmzcCuqjMjDqR4MTJJk5",
  "key23": "5a2a7NCkCGhjsrhYJrxBiNPoaQMM6ypKzt74wdkSYeEc64urq6zQ5Pr2bHBAHkTFkkmDPX1eknEQ8HVuRe1ttNWa",
  "key24": "aHVkErPMdxgi1iPsc5bxh8AHX8j3EjTMreiBnz3G8NHoVpPMyfW1fCg53qmwGKWGsRAbbj24fGWqz11cg6PrhWx",
  "key25": "4EpHA5feC3rnKGFofwNPKy4vLv1pMqiyWHJxqKRZvH59LhJF6FiKZ58cWqkgjBKc6EXfJSjDX6g4znY8SpQ1adia",
  "key26": "5PJR3hUfLH7tKy6VMfEuXUYivxShct3y5gkZcq42icUqUyUWrZH56rjtSCzPMCLGzzfWTw51E47VFMYRBGYVBXTd",
  "key27": "2ctrXcz1VE94DKhTnNhU2RHHrRmvEFgmtbjdCLnZMKUun8WCCmzrDiLZM6dVnihG83k9E1qaisPLtH8VdPAdRGyz",
  "key28": "4jpgxTMWJ2NiNz8xxtKmw4Wh6DjRUsoqvG6z7Lcf7NL6jynLmGBiWE9fjPv686oevv6Aoe1X6MbJVkX8h7vBzp7m",
  "key29": "JhU6YKBaA7pUpvuX6Jcbx1fWe4cw62ne5Xqj89PLQfEpWsBfn6SdjsgxuvAenTZKUJK9ArfHkKz5uWcYNygdRhT",
  "key30": "4zTaGwHaKGhPmhsNa5QwcnDjwEPfVEiZwUAuhzeSWNieSWU78MdVpZ4k7BNH5sAAZoanFjCdoLUJUVnZuRkQuJWk",
  "key31": "2LngeBeH13pHcszTALhGRUA3w7CxWXsyNhgxzypEZU3DzwmynNJQUjgie2BoMAPVu5qnXmMMoVXoSR99ypfnpDfN",
  "key32": "2w3akqWzL8FzEm1DNVdLsjTYHZVJ7SVETG8gqWvsjmUgUiRyZTovDdYWvhD8ntneabXUFudaneqKpoEEJitwjKH4",
  "key33": "21fKNeH5o7DrrzJ35fbKWHRaCdyZtA1c8zZt5DXEaSNdCtVTSSp1wTABhaFSG4joEnvsKxphTmcQEpf3qY2rHqpt"
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
