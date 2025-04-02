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
    "42qD5ADx4E3shuh27UWpfjKveqiM7prgpsttac7c53WmjGxLiVZiRHmsEvafXQLTd8tVbc14yeRscYczmJThJW4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31k83wW4uUt6reHniyJLoZqzdyneDktZphEUUVaejpJeRW5VNhHmmkvrtLYzTBhj8Q83heUTnmc1PhNSztBegHKb",
  "key1": "2orAksDwXhzfRGvNpBZfveNXjqr6LQiQ2Z4fv8XGKZQJ2oup9A4gJxc7DMZjrWSJsgSHbCRPwaM1iSTm53AeRRyv",
  "key2": "3UBMDhjXpj6Wp9UZkbbzWzpoGcysjtZW5kZg6dUFCV9NHQxNzXQ5gBQ1bPZ3VeEEXFBNo6g8LyUJTP4PLAUyXZ8y",
  "key3": "2brNoRgEPzSANgP7EheiRKo3SGgPTn5nrrPwZrb5kLvRqY1QPYZ6ot4dexvvnefHEXDJ4FKFGV1ntuFXqKRGx9n",
  "key4": "2mz2g8KVvX2fSimdzBCjG7y9yN8XYtWk29KKACAJupnCi88oYoeQjNHWawcihh6cytZjSUoxSdz9yABmD5og9Aip",
  "key5": "2Nndf3LVYuBMt6Gn1Br1aNCSAe2o9QhFqj7zW3JBV5EzoTxHynbtT9AbqTgudbUiAZnz22LeiWf7gNCBBXZe9fBr",
  "key6": "2Q5pEgr4exhXEDmxKpERtegX7Fzome8uPUFhKC3QcEj8Shohu1oc1ttpsFzkWSNSFByEv2PcejfN1Vosi6CgPm9u",
  "key7": "3tW39W2fwLg3rkekHVwVWkvCgWFFhbKCdStzyTsd2J3j71FhvuWBgtKoEbAcxBgdSPWvgNJbqAvXncWriPoaMLRB",
  "key8": "xh3UJUkkdhZz9KfuxS5sLRPhKj857V9tLHP6zc2Zkk4L3bXe3AtviCqib9Pi8eu8Tyr5cbRRbYmtHQPMLKBbxdj",
  "key9": "5bmvMciM7ghSJohtZHKNfYaor4zbNL95xB8MKqNEWN4A8bz78hvStp8bQG7fpxC6Jwao9wxZNM4kbmmCdfLUq5KW",
  "key10": "33NpGWnnkeT1SoVRo4WDxc7uxdDwYxDYWF6vL5SbGEYQwgrX3PeBxKCDQT2jJ5c9y51vsgGT976QKzNcd96h9fYD",
  "key11": "N6uDfdYaVXHtnMr3gTooTJ132R8Em46dRchDoLjgYJX6cdoqzx5JQbZyoqkAHr1AnJu9QTeYLzeHaG19iYrv7AZ",
  "key12": "3xMM2ov9b48XL2688TCTTBhvdFz1icwjQRjQeWeAsBG8drzo11BpA4T3m5JZ4LqLwkVincayVkBc39APq4sThn7H",
  "key13": "2QdKJdoqvEKJ4jB6M3VxVRcQvJieVUJu6PQ6njpE81GoU45Czs9bmnVFE6nP8gghm5ee3KH5XxoFLdmQEnWCKtEJ",
  "key14": "4TH8y8CCk8CMjR8YbnzzJXThnePe5zWYT7uAQsLTuVpvMS1wfWPfn44nHqV14Lhvuk7qvSMZZUMqonmie9qik8Q6",
  "key15": "5s9ckFF3JQkwYEW5muagFU1GFZMG1KRQoKScq1n6zofiBMQVHPgUJazWwCKSaBypRQ7LdSa5w5o4caFZbtCHoQ2E",
  "key16": "cXbwLKzdv22QQqB7YAe7DKGas3LMUkbhHFgWz1LPaG6T3YY8EPWJDX7jy9mqEERSmo24fUezJHs5hTp1KPgBQuw",
  "key17": "5MK6K5qo6KU9E9TWuKE6WtyYpa5yUsauTVeSN9sCwCoSZQxgVBc3XziNYqbYVSMYywaCP7wa6u6Zy8Vdeqntb3Sd",
  "key18": "2kJ7mjhtDsiAXWNx4nPZHKkfSUMC37GBqcJQ7tsvc6iDtHzLkEKvLGqh8FUBF39t7gzdG6YW8ptXkWKfovfQZJoY",
  "key19": "4UQMnE7gJSGGGYw8AhHH8ftDf4hipSZsBrWzPGgHGHWAZUGeHcqLtuVj5yzwespecMGADwfCXs14NPFJ1gNy55rP",
  "key20": "211A7oLxCvUXGdt93GEvrKj5c5yiCX1VZfYS1xgqUqbeGdrs98szqrj5zNihpLmHyocqsmM6Xw8ietGfSXcEnFgT",
  "key21": "574Mk7ZJowf74yUACi6BdTxnNcq8CowZuBmJncowJxcF8vN9hq6Js1GUFxxNNTZa81nRa1hBNTgk9cXzd9a2Gzun",
  "key22": "3x3PBAtT3YV5mW7Fu77SCX4i6e3yQxq2Ua1pTmzWgyNWA6oqs1uexoKLFX78ykYAUfJVrbuhqNqK3BZ9uPBPK9eb",
  "key23": "23deMsxBKCC49Vyq6VARwck8CfYhW6h4bizAxHN2FnkAuV7MFUKtaMkYZYbX7qyUyc4fZmy4BXpbXcQj6Yw8qqC8",
  "key24": "4AgLPPqyPwWWCCit2Nfhr5TwnfHyqpBi7pKgHb6bK5kUMCTGGS2Tynb4CmJhqHXb9CKeZzgjYzvyMVNe9bmEiWdm",
  "key25": "38sQzRLXMYwbXBadNz8Typt3rWFjArqancDc3CLbakVrHGHcxU6FCJAsVepcoRn2SwWebca4ZMm2xvE6bL8qKNy9",
  "key26": "1boQ8jomGfCQQXwjQU2WobyqWWYhA956eNVbZZhTKffg79yP48JhXzksag7uiQHUrMxE1z4b1dNAsuFAHusWSzX",
  "key27": "2LxpdWDnZKht3pAUBxacbFBZExzXmoiwzWjEoJCSzjUpSfKKqA28mxsaMsBJE6KR3rheL77ZL6ybLpwzy5tvbkXv",
  "key28": "6mtu3UENPoxQGSp9WfE3VVUqwhZC1UsZVZhkXMxsg3ACz984sNLzJaEdbsvZbjwUZGSGheRa8vf9CeK4zjmBmvu",
  "key29": "3DuTKHrMmkRch5u2mTqG6kvSH3ahebfiQ3eNyVWCpxY4bVJexXYaSTDfq5pGEVYwZq5VoSkK8wei1v5jPQTLTkkf"
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
