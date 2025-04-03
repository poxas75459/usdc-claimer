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
    "5VEMC96qZEyMxfFuj9edVbAvuZsL5uaL7aFLSWpip5NshnkwS6UUENbj162eGTFTqgGC8RnYZKSggJkDWvfZnxq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3st4C3fc78HTgXgQ7UJwEUn2LVe13FtFmsrMsodbbFBY4dmkqrSeaNpeBSEMqSxYmNMjDgxdCocotdTNvEc1cXmq",
  "key1": "5XJJZ9KnH5hy8FWaW7wCvD9gKCG1WbjPFRRNHEM2iLzHTEAdFHSCmc59x3dHtQCcs2ZQqWKU2GExz7HNwFTJAPmp",
  "key2": "3Wdn8xNeUM2qrGN7Mf9u4JfEv6tBDtE8M6pGatJ8HihjuxgvixSJbNkXorP7nG3x4YXUS5XAw9iSnSXDdTcgTi56",
  "key3": "65dZ9gheLAWHRmJhwHaUVhiKEzRLQdk1MGuQ8PoqUfPBDAKA83Y5kdaoNXAeaxMF9TUjjaznmQmnWRvfky8UxUWg",
  "key4": "2RpBHsPTuYiVuWXmGrwSXewuxH6Rbqt75Dc23mqPVb2cZULh5VUs83Ke3f3DPExpMRZQHA3ik6BgX4B9EbAfKeUm",
  "key5": "63AN5AYmy62w21AfDv9k3RQTFxNzKzRqjHjgxjKM3q5SS6vhKpPLiMEj6bb8sHqsiZaKM3sXBDYM1asJgBsCpY1D",
  "key6": "YaNZs75h1YyaPdyDTodnw5az1xp5N3n8JYztPSHjcxHU8Jko45Ds9oJWcRTcJEXXsNHQBG4xEmM1ZwQLt68jWhB",
  "key7": "3ZFagrxnKHxBwYgu6pbmpfjq7VDjPojtaRmLkewuVdC7LmhQ5uNZ2WGEtkU8jX7S2MxdvKp4p8F7kFhDCByb9ztM",
  "key8": "27px9UuvLvrEE9C9S9jEvS4xwUpUcZvFXorTdv6iTYCJ7kaDh519rTqRQ1nKbrZKxh1FnsZD8pisoMySv2kWi2cA",
  "key9": "3ojV2Dz8KcbX48buVUSb7cfnssGksStm7Q5Ri2NVkC9tiUaUS797FXxJrgcw9Mf2EtrJfZx7X2GntW9a988ZV8YM",
  "key10": "F6zxXUoMUSbt8tNaXYkF9fuH5mB8WkP3sqbseePQa1bz4TxtEhTifCDSAEcqPN6WTA4nKjgfoi7qsgfYDMAo6Lu",
  "key11": "63kFPgaoaEQ1obhpvy6oRGmghXuQESfR5xsKp8n5gKJYmWeTyE7xsnytGWrREANTiPcD9L9jdB9znNvg62goqWLy",
  "key12": "2uomFDL6KD2f9iSwrnQxmEbtMdHHee6SqTPs1cJRB7PQgSfc8tPwHzn1GTWvB66pFHvUZq1KsCzH2KFwG93igQsY",
  "key13": "2hNdd2vNUNeiE9RGNU7f128SVcFTLcVU4aU42evc3bXgZ9Vx6se3XurB3iyQVmF9hriJLULHnZfEZwYz7MQBEvVE",
  "key14": "4ajbbVF5kJQNTXmrqXHV9sG17EGXgZsjigRHWw3uFNattruntMGkonLXhKt9cH4dFpNxc3D6FCHg38bbGiFNiwc9",
  "key15": "5g3uShxHgsZBnQ1APKXWe5PAWJ8LMM72fFhPowmTHh8gDWB5VevSHEZAupDv2mZeZhMoQ7up5exAxNJb3gjfpnPb",
  "key16": "2GkQtxDHX91RHoHwygE7Sm9SNYLwgneY9om84ReDdR8zcE3xTm4cXbGsGku2iGP7KV6ZrNNcuoU8RoWXySJLMPkH",
  "key17": "2cgfbXW3CdDrzb89eRpn4baiWt17GVx3KYCyD4vcV1mWm1aLkZx35kzrYbi2iMVFi8HuuLz3fiDMNsoX56jitTrF",
  "key18": "iHpefX1kNM7yqVA7JnEyXyfUYHEdSQdiSfBQH5WJJfmGx2LiQUyHR9avp9QX3VgawzpVNHhJYd9ufzswPPELV9i",
  "key19": "9L4cZ7JZt2ig7v5J5tz7NHkYZyf9ybhBtm1GnQXuFo89sv3bUbh3xSG4ArnajSBcrLuXnpVZAgHvvRmaMnbQ93P",
  "key20": "5HtLmt1F5ipw8sAe4dAFqtQLefnzpm4HUgMHG2yCStbynZkmNh4frzjatSwre41UAC3urWN3uYYpmhbpKrjnpSiU",
  "key21": "4CjVJqRXUnEY7dn9ZGc42jpqunNk9eVaK2oBPSSwzbyvAmRuUvKeDTNf1yNdkCXAWD9KZZJaRWiLFqzDF11wTuBb",
  "key22": "2xK2dnRHpskSvznMR3MJypPLA7cewp1Jur2NyhXSPkADYHxA8BTde6ojp6425MZ9k3XLxfUjcn3rDPuiVuWSiZUf",
  "key23": "37i9N6qyC4h3ejBUKxP3QEqymCixhSUp4AR8zxWU2y4t4Jnurh5Wr6ay2kX5AarAFgv9yJUJXJqsHPd48r7iEJgm",
  "key24": "G4QmbPA2J57yXR8rXhcG5NMktQdMB64KTMwe8DTdCazgqkeGbRareev2BCTnUTq8fiMK6KXQxVvJbuVmwc9wPpN",
  "key25": "5ogBsevmsUp26Vfu6EqQ5PgfuA9hMsvCGgyx2h6AVgEmeCpoTFhcdJSXWR5HZ6YzYcfGEriqgg8CRStnX2BNBTqi",
  "key26": "3UPBhuNubu7aV2hW9Z9j5pq3JadaMk2tJrAVAEdEvkNtFzvpRLfjmMTH5csXS5MM4XTFZ7DEgbfMzUY8nffBDNi1",
  "key27": "WgytcbMHkCJMLMCyLdugaBnLXM2Urn9sN19ACPxdDWVo5t71ntkuJff41Hp46gAFaaQ5VRGpt5YgkzzDDyeSU7w"
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
