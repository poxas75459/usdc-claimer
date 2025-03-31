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
    "SE1kL7JuWrJGbBQEhuxH9Xz1vESa33c3HLTVijarraz6P3M7PPmr95G2Us9fWMiWtcTbEETSiYkyxq6iWyN6x8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7b9Q3eob8j4ai1peymYCv8LnGP8AkjrwHifk6sdckveBLgjMeJgMPLD2YguVzYHadTR7ZAs17swkPLQ3szkWx",
  "key1": "R7NoemEHapUXKEjFvwJ6D8AktjywYsfLrgS5Q7wHMm4ZxNeDVZFMddXh7wjcqxCu5Ap4fwTJdiA2j43LGwuX9Z7",
  "key2": "4KrCMZAj4e91v1NHD2ios7X975UiPrX9sCP6DYpCECX3LMKsX2dAWb35zM1nwfqrgUqTzDwv1ZeXabtnp6VX1vYj",
  "key3": "2kyiksNYsHBGErB7CgcntFv5vCXSt5oFpZBvWTsPLQcidxoomF6kUBLsLasxakcupuZPsxZDHwi3zETvX4df61T3",
  "key4": "4tDiMFQyVtzpvNGMakobSAxR9MfdCP4WKhJkZeX4Zw6okDixLqri7X3JN2JSQSNdx1BpgwfD1xxfG6R3baaEZKLJ",
  "key5": "TwouU4Ps2izeLJa8yq75D6zTY8XRG5vsQuN5ei7NMyZaEQjXUxQB884nAy2KGSxk3zsJM9J5JZpaDppPfgvUJhQ",
  "key6": "4VSGenUYncMj1jFoaHekFf8XeSMnufi5XUGAYT5iJnbLMNLUMwZxW1wzfuY5BoPR1NUfeVU91ctxhiz3mPRwAZTa",
  "key7": "54uk4QshUHnBEyFKbyr5CApoaxELNS3tYDPPfJJ57brwNwZQoRaCbbjfvkkGvQNvnNZhwHBq6Mt772YYhiZrejdq",
  "key8": "3D2eJpgga3fh3QBKPLULQbVh1pfNmGKaMmasaE22p6MFmtvsknKNyjRRCtvieE56nzKwaXS1HQetjsTuQKRZ18hi",
  "key9": "25eNZwSbHFawF3itUQFh737ykPNXM5eeYp37q5U8uE6VUfKTSDvEnrKAZL3XGSJwna6vtX3fVEYNTM29aL3mMtRv",
  "key10": "2ipzejWJio7yBwXj8RLsTDtFW4UMkVbJs1xWh6jgzAEfPs7zMbMJn5qtKXn3gEvoujfEbBfFBL33zGeyggjkfQyP",
  "key11": "3eiYcT1upt6TdmBQExrVCSPWCdMxDhgDgsPfSHqsJd2cuqp4EUeCDNaBAF8eUbB2Bj4MgbHDXivzfrTyPp6SYsfw",
  "key12": "2CxmSDaZyqiq3Ges34uFRn4pqHNBpeHcbN9oALcWiSYPu9Voqs6eX7AzEQnH6P8nZQZG4jSQu67nVrCZhC8BzKLJ",
  "key13": "3TPZonRmdyY7zJxW4k5JZNr9ZvpgvL7P1H3iqx3HfrWi9xMTy4iAqQrmXnL2adi6nSPA65tHcvgRH6LqCg1sjzny",
  "key14": "5NpqAT7wpj3BoNR5bAgUVDsFM9KJj6FhU3jazZ7Lxu2STFucMfxfwxpRKJy6fVekMyj8VofjRwAfvCeaXNC2NifA",
  "key15": "5xEWQnbVi8UNF8DhxWFt8x3Yv3mmzLY3AWuFG5tziSNuhQpK4UmvKAPmfwCKbLHfsuQznHX3C7G1KFGtvF5uZNpF",
  "key16": "3KxskyAcxt7MSa6g29nN4BANi2WV8LBX2HYyPzwUdxW4TVLHmJp1ekd3FZtdTB5niZE417NhBS7GeChF8GEa69EG",
  "key17": "3MdYBuxTzfjwZf3DeU9t2sbE5X73hJH6PrHS8r7WYbLoWv5Zuzu8Ry43xppyGjJEVo7NfsBa7ZwnU2k6LMHR1FmY",
  "key18": "4AHo3T8kkCQxPjbAjjpL8yLRN3As1zSycZT6FgNggBaMsLSGH3Zu6DKoK4MNWcJC1wAu7DmEvv2vRboDBXAUZqDG",
  "key19": "5Lpkm5KLeyZW2HTku1dkToY57Scy8W3ksfScRRahkLzHUK8GaRyDhJMMHPDrQ1qigj5s1PKWFDFBfF5Rd4ef3aiD",
  "key20": "3LaxCuyrPrS88xD6nTWXkTiXeUoobFF5aPfNZmqsNKpfQYZxX2GCxLCph1N8XYgWxkwh3mBhkNgGd4bc9xX8Kji9",
  "key21": "5xUE3zBmW5yuzYo6kT6pygsuwhsMoQaBN4HuWrW5AXAXF9AHJsLLVyVREQmi18UhdgUZ9yMwCYy3DURb2SXWGfQS",
  "key22": "3S4Qk24evU6441BCokVzP1AxwF9EzsFFbz3FPWFahzHgu1Nzi8kpruTBsqEdEui178VLfqM8DVysoZGqGFLTQQmH",
  "key23": "J5k9reBUTajcUMSfWEhKsYGRsp4T2XLipJia5kuaXRtJBXxAeoQU3RPKnmNgkJntjqdtVqWPXgzPeE2fneD4Gov",
  "key24": "3sYmozhbtKXH15NM3poZKXJ6SiznXhCDBfUzpC7eHMTR89DQ4ZraBm1hdhkcG4b8AZL9r2ENouC1jv6tq6FSiJKD",
  "key25": "RpodUFkE3C1Q7H7UXT8DyK94FELHQdcimUuenrSb8xVPMkDxQAPBUa3dfvmnH8fhHxKit26AQsB5Dkj23PsJ5CE",
  "key26": "2HqFqhhQcrUuSQ46T6Z8MjeZXCDgi3vHHfKebeWvNVnqSgApt9jtzh6U2jBuuM5GbVZbiVnG35MD3cNitm9x3s3r",
  "key27": "2Lv373R6gD3SXtGxa8gDNqrWZm57zuvCJEfofz7uctaNJoAYHrSnStG3BYMhrE9qAjaZREwupF5gwD66kFDAFTgp",
  "key28": "44XLYhTgGVSmMHxovmqPFZFfLwWWfHdRgJdhLGmiPhwCWrVBbPHCeD1TeY4pGtNiRE63ymJnqcNjF1XFSkLjA7Jw"
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
