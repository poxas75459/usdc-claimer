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
    "5ATvrAzCibGQWfRQckpExEhchbymFBV2qyo2JUYr1EtT1GuunPerV6qoubDmcjrUTSvnQ3Uk2y4xdPXACNeeJZF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcxW7ZndKY15ksG5WJ8T7hJU8HMcP19srjboajJGQTcFmYvirpZUXJ7mGmZt2VWxiFEibTNhqWGP2kAnC55XB8R",
  "key1": "4H9TL9p2TM5xMko2jFrZ4izrcXUJvKmzUZk9M5YFGx4YECbmCP7HwDp7b4uCT3W3TohkxLTtv5fPRL59GwaiCRA9",
  "key2": "4BTZS6cWU6cDjK7hHaA6QNe4NWfam933qB4TrTrxGvRdeGRdGRmxSEHTGACBffUgb1ktdvqJ67vGZq8MoiFYHYSv",
  "key3": "4JsFGxHkPLTUpW41dYrDcJu5r3RpGvFtQtAV92yBpKnyyuC7QGA3LrHyCK6QE6759M8f3zFLJ4sfLSZN5z7NfWCH",
  "key4": "5SoR5D5wXj9jZJ1qoQrGck3XRHmAQGX8XFMgQAk9S5fD5ExzNxyjHsRLPPHMjoUX4t3LPG6Ghbn5fskPERBYD13r",
  "key5": "39mvgbY54nt4dC8y8a8JUypEmykszJ8zzbX24ebdu42FUdHpRAVkNrRCn6mDVJCGtQPAreQ8ai8FrR1dPRAwQsDH",
  "key6": "622kJC6cvsSrXqZUpzYsBAzSa8nAKLhyiCBV4X9a6UQdnmyAgDaV21L2Nf4QDKUSid6XouutbUWu1JpmjCQp9Q2q",
  "key7": "4LdrNHbWEgBQYZ18HTmW2HcV3XDhK7taEuLBYcvELRpupft1kH7rnk5aNJnXzMjLUJv8DSSzX35mLNRdpQadt7MU",
  "key8": "5BHFncuULR6xtwA81Nm7kgGiHRtsNF6RWGw47NEStKski2CsHmomXRAK82fXQYmy33qfL5ZkhqkP4P19GqpAy3Rc",
  "key9": "3jtgueMQ1D9K3eXyzC9pcYqjnVizK31i2PCuT5c4EB5FMqTjcrteu51NVqibHLaqqFSYoCKpCL3BsoHKmP23VzcR",
  "key10": "5qPsQNXCfAeuu6vg9wGXULZwr279Y6meqvZsW66XXJMhpUkZnEwVA2curKBHXzhDXC6dhJCuB6u2oVJHRpy5JVsh",
  "key11": "4vPG37CoHoKYFCaj85pyz3cbeHu1SZsYfMPPVm4ErJpfNcS4bh66aNjUfa8xETnEVeivifJxPb2qmvP3yDvaqUVX",
  "key12": "598e7MPg1mxcSBmyPEyUb9n4dtjSMAJbLh8jtt4rpCsiw9EhHeWfx1C1q8DsYLmMREUGogJa2oVpxrzZF8LtMyer",
  "key13": "2rFwLDRDGZ7PvCq81UaEcvfCYd5Y8XvnUQ82K6cm4aC8ChSSxNa2SvXQUUXkFALRktom7Hit9dPuBaQKgffUunPo",
  "key14": "27QSjdueQUdMEh4Ew6BrrneBBZfFgiVp1P244PoTdxPW6AJun8f7h6CQ1f5US2y5Fzb1J1EVDtMi7Nwv3FWwiP7Q",
  "key15": "4hwgmL7izNYVrwqmPnowis9NPtwtvAzpc1pHgsVwA1tUsaqYawXUSNFKriAPu5hh4YxfYqq2eGVYQP8ESyHbbutC",
  "key16": "AH7p5Pw2vXoUWGcJ3EP2HoLzGPrU8qdk73gu2d8Vawfji8mavcWtX6MdYBrHMvo4saBTcWc5LvSZ3qxW57wtkWN",
  "key17": "jf3T9EtN2v3JLgYEUbe6pv8zg55xSCgV6yQHeGSi8xNeHvrMDuy7RDJFDwrxhEgL9jnXejtd8C6Zjt3daNccFmb",
  "key18": "41aDSRZdGRDiFwRofqzarjQ2vUCWoSnG2Y2BrUWx3EFYkC9EsRSoLVt2euMWt7J1ctGYYfBH62RvRZmLm2rB8dTX",
  "key19": "3Bw7wxhHJpED1g6xt8eFTge395sCnATEescjhMpKxWB4uqFApvFak8NXUg5EodnF21cfHeoUYcMkJX9JXokuwqxs",
  "key20": "i7RHxQrL3T9WFxvLjXWwXaDVvgxB84t6Vz6SivJmN57t9dRacQXBp5SytVQ7oZbn5ZcoAPz8N1WbpiRhZcAMsLX",
  "key21": "5DaCuQ2em9vbyonEAkLXmZ44K467SX4rGxZQN5Vpuk4nWTYBCrMGXTnnURgby4djbkLNN2fvzcGTEvPTAyyrG3V",
  "key22": "5XVAMSdohXkxgQJPWsV2tWymuFCUwDN2MMFxTYUegiGVQGY9B9Fd5LBvbQgVS461Uh37oy9aSdJFN43XzndqGPnL",
  "key23": "4qWJ2ZcgFFmdW1JtP3eNBYDE4ytHuxH26SA5xtGH3Z9X5ubwcCSKpBqLRL8t3JvJvfWJSAmY7noK28p2kT8t2xFk",
  "key24": "5c5hHjodNpAovT16zPVuwiUJqmikUSHfHP78GRQ8ueEHvjXwgxyk4czPp4nRDqWKNxCCA845ajknGymVHfvXtRPv",
  "key25": "5VCK5QUDmCLcf4y1qPYi8BuTiL7FhpPewQkSmzhfKTDWytPqPRA2J5mAt4GVgA8RaCFpdPr2ywhpAF2kmubHikDy",
  "key26": "5888xHrFYn6kWQvjjZnWPBnpL4YLjUm1poQxmeUX1g3qZSckJ6DjaTZZ6qNjwTGXj39k3EWrMEY6Mjvs2FyX4bXv",
  "key27": "rRgv75HkQHh9vDSLemEce6i3YtZkyjKut71Ymj1PTqZWecjCub4UEuceTbcPaZ3zkYPEneBTYVwnfpYWvLTb1q9",
  "key28": "39ZxY8zfNGbYsVeE4Nc4YVaLm9pXxhHWgJce8Biyq6hbuZyxkAbpwbUfuG3e53rdU482L4yRmAnviBryDTbtYw9t"
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
