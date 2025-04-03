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
    "5TLJyJo3kebyjpiKr7SkrHpHUMKH6mpNWq29VCchNj4963vkGLkmPYEzqQmPozZnBzchGh8sxzdUgYVsCoz1EcHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mt1QYbNjvodGHmiqe9WreQXxrUVgs6yT6atESQb3r1f6cWDzKqFNGF6Z2WRr91Scuh59a18UmzGKJQ2hKZq1b7x",
  "key1": "24r6MMdQ9LmPncZdHAYPBuYzrBk4PKzKY75dySVL9d2kuxbXFPLuaBxkEbS56j1AyCw4c6bvwc9TsrcmjuGByJ58",
  "key2": "6EgfFNHfS74QwM24dwXStqWVNsgbFQfNehrFgQjG9CVQFgxv4muNJbndiHhkDMEsxZck5WXTbLeJWTmQPRvuFkU",
  "key3": "2KfrctPLw13Eh5SSv3vZP7m3upLs9eZVirrievnyisY4CyEfcnsAwXFLwriAqGUwiV1XfmSkorPd7seJoSNykzYF",
  "key4": "5vqRYCCdY8W8JirbRESd8kVaZ4wxpmrQFWhmjpimqT5w1tFiuDgVoKFntmbVSHJLtzzUAJXPF25PbtyDjwcXcEKe",
  "key5": "4fssvmvAkona4SXoEECEJNT54uGGxDTygwwHeUGn2A3mprQMc1RuEuEiM9cGZQ1ujwwsMpY85dMiQDu5jT3isefH",
  "key6": "2wxpZXLDmwZsyDpybE7W5Gop6CG4qmNUK4hZccYvkoszieVi9PZx914eQVaUcRCJkEN8hoMxfafujE97TA7RXuvt",
  "key7": "2dYEBJbtjqsXjtT7KyXYos3b5ewXdcwxuos23mRwPFs92qZEaYAxEGeZmN82bgkLpLruTfYADw3yx9pZVvFR1oQd",
  "key8": "65GvbBHTkZecSSsbk9iD7fSJTEvh4eCdwV3qKgiEnMvHquLMoSCxtRzRCM95Mrxdz5co2dZ2AdiA1qHnSbn5tt8",
  "key9": "3GUQ4VQAwDENfY7pBTvdx9GwRJ2PAa7EmqkufsrNUN8Y4MwtwDFUpA1MHAsEkbU4B1qrdRrobvq6svjEaEFTr6et",
  "key10": "3zdbKqb1gToyfDBAeyFbnjgvrQ8e1iwhWF6Zo4ZpieDav75mVeGNFswaLTWHekcDsS5Gt154o8ixMK8bbczd76un",
  "key11": "34sykgPsMcrKWh78hARNK1Ub7wZbSsbKrQAtuPBco9fUuPUu48sGYEBmegA73d9vWvt9oNBTKiHJdY38EqepkvBz",
  "key12": "36uDgjzm6u2wehDT9q8vV5sWfSxzNkM5h4o6BLtaY868PJ9NNJ9TYZZj3TmUbyh26eobU9FZLA3uH19YQoDqf8h6",
  "key13": "2oQxwmi8ssuxwXWu8nNTLdzFsf1jN4gJCB4hzzVcFLBopgumrmcxmppcTcDeWJSMaCsGxnuHCbaRhrck3koeRr1W",
  "key14": "2i784ZFAnZr9gkXJDhzKxc5jc3EcDbegAcjgMpPAaZR7FVwbJkVbofDoxjSFAYPG7ypmfuJV6tbHXqwuxBUbGWe9",
  "key15": "2B6rPSW14DceUJYAW38rakEqUpLnvBqHXmP9MRh95Xag2X1rFJGvRTXzZgJuAHG1v2A2dXoUXVdJJuS6PDqbD88B",
  "key16": "3KmSgXbKhXizxRkvTwmxte35sW7X83NsGsq1GAbkBDpYCZvDRdTTfStN6JvUUfrxLBS1AFRkAhxkEkZvW4Katmkk",
  "key17": "21rsk94Nw4AiAhQcPQ2ERBbvvM2UEcdSbA1dhpdCipHr2nX72wkHrvFM94VhVtZUS3GRgkwNeYauUNbeRzmboxfT",
  "key18": "2aRogL6D6bnkKkCTdKvxywzG31nGbyRyDUAUp9o8gxJu2Ks6SKdeuKikr1X1vWJKWiCDWR5y9j8w26y1WtxFADtG",
  "key19": "2m1NjY2PTg1ag5RraUT4RCPCMk3foHHdE5HETfxx2f5aPZZ5X8NwN8eRoLdmz48XfwJ9YTxvKPrwFD6G9Wyabask",
  "key20": "3AGsV9wfah1D4w3NfG44hmPGDnDE3L4hrJouaJ1cdnj8ewoph7F4fFqJ1tctkGjMSNtziXZ6eqDoatLQRDNUKPZq",
  "key21": "32VCHUnvrNdUtLyfCXCkEdy9JK2kGNJWRas95VJu9fCU2PuGyABtLrWNvzLA8c2UA25zf5CAaLyu6MQ76jbubCDe",
  "key22": "MsEYwQ6e2u17s1rJ97S8gkou3fisNWX2gm37tH1NEuu5bxwg56Amsb6nSUfZ4WAqFyqAkDss4waVFukrkkQuB7J",
  "key23": "2VkuTDmfuk1MWUd5RgW7eneLmy2SXHsdrLqzbe98pzMRHqaYySqMC6W7J1zewz7wgUDmCpT5rMdtShgZT961ToR6",
  "key24": "4XLppm1KXSfDx8nTsg46pEu9ar1ajvaWcVobFjHP6jqqHENns9uGp68FLTVitiAhDgoKyAr8oPzwM12G17gW4n4W",
  "key25": "3mq77R8Z9Rf6ARoS1zDruA2i4odsT9j5REe693EZukJHvxMSBfuVya8RLP5ivqAd48D67sv8vdiJLE7RdqU7rE2W"
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
