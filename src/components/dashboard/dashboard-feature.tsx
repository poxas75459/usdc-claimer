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
    "3azQd8Ks8baMpyHYXJTajMJSa9GtznfJL5cxebnGdAyNLZxKARKtZhaAq4nN23N7geeqXAoRP2vo7tP4XKQg8y6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofG3AD6vWgjS19JvoUni4t94kRdfDjV6rqAQTP7vCrfVpKq5UJawPCZGqWDG2V94ixiqNd2SNimWRa6FvujCuW2",
  "key1": "Gz6Mq1U5ZXkg4ptcmxyWqrhrfD8TbzCh4MxELdupp7oKYmyVCv8rRqh34RiKiALtRJ3DUvyReGSzv8eV8Wude1o",
  "key2": "3E3RTrs8p3krpw73ogd3qpDKHfKdVmPWbY98ffxnshwnHp7MKeDXLW1w4HKzomwY4FNBYoHbLuoNRTUZyiiFCifJ",
  "key3": "3Nxqpp4M14v1t5N4FvEASJPoJr8NFoPbuS64Dw639C4u8GTnqbbYh2JFSXjcJWxLniWnYMWYFggRdMom9sJhCoLc",
  "key4": "4U8M5x8MiLYRhuTeJQFoF6WsWBXCgR2S8chc615JTitr9vFSd85B2Nh2VNVvje6KfWxMGjg3JDQNPm9pBApmkFpR",
  "key5": "3rLYbBxBYBkZmVonXNTKnbHJJsHzjcHicKNXF13utLSDrJCD3So7RGJMrUnDv8DyGP8MNGy5XpaUiriXu2bUTXwG",
  "key6": "4tPFP3MsZXiesXeQdMhymEqNiBYKwwhc26Zhog9Rs4LYFcTXWwZ6GBJLuaywVsum83A4awkJR4LVxvpwuk4prJCn",
  "key7": "5uPMKz16n2nPNkznfNnRoEdAkJsL1YuRYxghe8UKqQqYQ1R5z2vqKtc3J6VBE2yEs3fvAyn3k5XVPigRHZWKWtP5",
  "key8": "d7fjZbfY6rZzDtbYSiH292BRfTXAiGSP1A8qgb8QeWBpgG5DfpmEvmbtjnb5gbpdVXrQ3F1JExtXTWiLGVA77qv",
  "key9": "2xifSWaNTJ6McEU6KksVEnTnbWU5VThf6o8XPFUMxomZ4ycTt2HakS6s7ELKpD7RDMm6HCFASZXnG3UwEDuW4rdn",
  "key10": "kwiKRohdaZrTEErf42gAqLYMuvCyzbCB4FEKfrQpi1BmBKZt8djoWTNjwPyt4xBfQm5zCajufiVdJXQxrZtdHwC",
  "key11": "2ZLHrKiA3vUyGWAiaJmsJr6ZHyAPQLT2qz3jhgb6btWRj3NruoAC3BQB7R7uV93uaeBq3aqif1nYKzc3WvgwHSWY",
  "key12": "4UE3pnb99hLucnWDMuyVNvuw76gGvAwWgpThNGkb4t2GJCR1i6todnV4DTir8TZBNi9hNjwmSHbfBmoYXiB5KLRU",
  "key13": "29fV1rAXTq8TbHcrydQU1QiVCVBiJadShjCuEnt88bm9no63k5sSUTH5gFE3zTPh3ZGVGN1aH4YNPai1ScC9HESC",
  "key14": "3z2CCbMvfEBgdZE7GNd1uYeP4pkfUDbsLmhwE86bVnLrebu7QJrnPDLHNjdsyQuj1UqVQY41Mm3QebGcUUiTtkV8",
  "key15": "5himwCKXbuZNCJrXAcwQSaoTq9pH94nchfW2gjXAaEM6r7ERJKCszmSmrbGsuhqEtshvDQycvmwqXt4fhJxXvaJV",
  "key16": "4HSvaQeFdeFHoegwftdG9J4C9rSEHy9jaSQ6Afxg9jgNUdGwnHbyTRhnSma1k5ydrpn8MMjasXjTjp35PKWBHKCF",
  "key17": "3tpYihVGVeNN4BETMhUxg9G9cfGDJuFbsPCP3NMWCPJrNHgmc7SjhoPAXLsuRWpccYubrLktxLNH7nc1QHTGDxYV",
  "key18": "4sjrFPN244k9uUJP1vZciWg2bU5iEUaCx4ZSuo66NP1y9K6z8QTNFRwToqhDBUeoKCqLpLLtozaAQq3HCkJUj6vz",
  "key19": "56EtcLft8r6uGfXoyZV7MN3D5PC3pgfBqH5WHgQBs8MgTpgHRNXw1TigKPcsyKKZk7DxzcxRyzpu165kyUXUcdjn",
  "key20": "35VRTaPcGHYYCBhGg5uRfpudQJGrXvkrz3h4UvecLuoS1nydgFt9rFxPAxeGN8U3NfHSGiRRSPzsnsSyRE6iFZGy",
  "key21": "2kP3QEyXPUPwpgjUUAzDAT9PxLerpTM366d6UEDrWcsjCtRYSggTsFSNpGzearbmPKbfuns6bk5FbcED38vm9La",
  "key22": "2gh43xVo9bpm1gskkDXQjJDUkwdYkmnyYJqrs6C7vahVUr8U7WSktbXA8f77jEY5y77Jdk5Jx6mncRkUkLRftbQc",
  "key23": "4NjqTu7SbSQw5Wu1sUdagM5KxRPG3z1NFF5fVRPsZBhBHhh563vDbNKRZ8jcPGoDdibaFteK4FpVqWgmGF84n6j3",
  "key24": "4Rce6U1HofyjrC97kBRTiNaxULDzVy4MZqX7GuL2Br6UW3XBLp2yii5AUfyVbFeo9FEtELaajy9JZ1LUNKT42eLe",
  "key25": "4119jAgCDbZ9TCUbj5HpT8YL9Umw2ns9qwTmvQmpverX6sh39u6KZr6w1ztRYTPEvHao4GQxghCXXjRB1YhwnkhR",
  "key26": "56gvkkAsG1eZoSE2tzf4o6r8fvLxp8mKzeGf2Nny8gM8LYnrbfcVwMR1UgBr3b9LPtoErgQ8CxCV5zEkk2joMXD7",
  "key27": "47z3u9bYvLwXcDnrRj1k54HKE3FhPwJaEQc8VaUt8DQUhF8gB9ognFvdTC5kHQCzUnKgrPRDhPKmpS3o7SP3FxVA",
  "key28": "4VRUv56aeLj8rriWSjdcmJBztWub4iXtqZEYvyctc31cwuzEZS92G3CAKBhLX8JTWjr4kdsQVfjq8hhdUVTwgzrh",
  "key29": "5n3tY6iHNcrecnSWU9pmJbiRJfkMeZzQDWvtRoN4xKGCHnDB3xSTaJXroaAP9AoKUe64uJUVCZCJ6BLNGgNcXeSh"
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
