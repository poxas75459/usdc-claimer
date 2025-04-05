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
    "5BSRZYUFsyLpk3EXokZKioxsHkfguKpii3Zbdf8vi3BRgQoPE7dz5rQ9LCVvAJ84i9z7mkb82WTADakyjUpwnmv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29S7h7f7kQp1jMphGoeuQHLfhky6GUHFu3haEDZCbvjGPkQCrHctKEyk6kxfxB9DxBVwAyBV6amt6cNmjoyeCqKT",
  "key1": "3QFjJudw7CerAgzWuj4R6YQmdFPtfEXRDeuzBkaHdwaDv6Z24hca1Em1jv35qqWSYZHJBRhak6FLgUe2E8ki5URu",
  "key2": "2WPsRCKbBBNgX2oMesMAVPKsw8hDX2M6Fk2Gh7sSxsxazezDAzAmLjxj8pkCUVCBTnrVvH1XXhQE6eLZuGgcX6Ve",
  "key3": "2iJB7utypSRtWbT2QF819bWLkCKTafy84B7FW6dZisJH561ThBF5SAJFuTri5EbULNTNFovdGQ3tgcTp1Q7HUEFY",
  "key4": "2oJdCLC2SFuk23VpBszMeBrA3s6E6Kc9N7UtHEjmSty8uB4diBm72TAeZbkiBPK2u8hV8LsNSW4RbxQcqzJLuLqP",
  "key5": "4qfu4Uok43NAercmfK2Cf2nwe32tdTVLbswC33byJvnu2b3ZDfzTPk13v9TsAV4zCe4iXCMB4Qptg7toRerLex6r",
  "key6": "4rQy2DfzbnFGnb8b1YGV4SC8AuE1fAKD2pNPY6tY8a1jw4jVt91zXpgv6U3hbpwPabwoFSB9QQUixcmSonxKtxN4",
  "key7": "F4k5fXWUReTkH74XTd55EPukyeigZG8wgwWi3rM16dLUzxKBFe21qAagejCxPrKDeZG5k9XnqW1cgo8heKkmCfX",
  "key8": "3F833BNfVw85AnhAFvuR9mPo9fAm1NrviLRb4fJenyk3Bd39d6c5cKZdtQszLsZ7P1xDZeyMtAJAeXj1z3vEXYkB",
  "key9": "QeqFxAxjyWKbzPzbpqZEvV78sLx3u5wU4zmEMGt6Pn9iWsUJtxUFsR6jKox1vkcSjU8cHvhgwHZiGWhcVY1uoKT",
  "key10": "5jQcVTqfYgH3gZN7FSVnrJC4ptUxNB7y1harmQLe3ti8w3Q5tmYm2SBcGNQpQZX1UipndwnpipsEhmDvJmjSpWdk",
  "key11": "5L1rptzxKfquECEWGByFWZQKLDPEAKijbPh9c6x87d4fodh3L8qyTMSKTfZNKdiEi7EFSo1RHAQTGb9TYRwyMDpA",
  "key12": "YR2ANYZCesFxw97fWJh3bjG2iZEXDTgNhgPEgWVxSrSBFR45R8PZEAc2pc36FCWy7Wzck1JaREc68hhCP2yGAE4",
  "key13": "4SXZ4GwvkpXxvMfwbS8w75crGw3tNnNADMGtcLJGcKNamnSrBS9WUmNCcPsHLqmoBgw2GJzPRKUFKghEgWJD79tN",
  "key14": "UHNKb4zRnfeY9v5Wbv4Hy4Q9JdzfWr6ZZbM3jpf5U1GDtRdA3fmaTLHWtRrUqx4aa5RHjhYcNYKV2myXYAn9Mqw",
  "key15": "rCfta4vNu2uqRfcY4NHUXBJbZCCjKAsnZsA1h3xaRK6kvz9YJwpxAWPMiCqLpUwYmrAgkYzj1pV38KWH1f6zvYq",
  "key16": "DvEeDYNe6c6qgJhPWPUK8fzhgH7Z3X9nQfoTmmySVnPeZTUMEvsLKd688SWpAStwKkzr3rpx9cHvUrmNEUYrb1X",
  "key17": "3cXV6RWgKkoJU443e6sFdmBJYbTKdd2njpDjEujhJXwgUj8HeMAmhfutBrePFffKGgDqiA4SkbypGbu4rQun24JM",
  "key18": "BLK3KfNEFKMChNFWEiRgu4Fm7t8coQ8NbYDCCog8T9XKe6eMdBtavDnLeTBYzxX5CifzMacd8MeeFSPiqyES6QU",
  "key19": "67PHRaPdcopMwWjY4ULLvkByD5HVftERtfpVQZm2z66Qu4GFyrbVG82wgTiQMGadhZ5shVEcTgFQoUwmyC9wSHGo",
  "key20": "2V5gJSv1rHWn4S62jVKsCYnG3gqCEj8sKNXFiJCPoi85YUr46wy3JnvvkTPT3eRPrWKYt1NoA2gdNEQytkDgmFT3",
  "key21": "tiE3PWGsevtxF4UZZwkSVKks7QVX3txxywS4FB1TBytkuVGRxQUa5GTfYctX947L12Jutr36AzcPQAwVgbpmqnc",
  "key22": "aumJV45f8SGmCkHpeZK9gW5VtH88Z87CRmwf9zgnEz1Y4siUecSY2NxsrdLJEEH54XRZygAF2rJbQ2yW5vykKcw",
  "key23": "4zejYc6L5qQUqmBnbAwP1qEMKAywabiEzFmM4Z4dAxk9fcEbpC34V91QEDHJZDQsEcH3JR1gzenDy5fMdppAo5ww",
  "key24": "4eyrrhVwCgZUx8pza4u8XK7pCoajVx6ycH8zXQ2kJbQskyoERGpYiCZtZygcRGZJs2KGd9wNEsFuhfFseq9LVhzt",
  "key25": "2TTdTr6NcPypptCNFmXqZAxbRsVYHpkgE5QiTiAGo7pxXNVyfs6LwWgHNFCtpaHhR9d2mS9s9JLQjShzKAP64Srj"
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
