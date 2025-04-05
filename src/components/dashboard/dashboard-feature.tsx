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
    "4CLtasp1PKXdvYuBzc7DAyXg7nvFZYsedcdxAGAps2wuVPDExtSZyuBB7QeRZYb4izwcLnB78aGrZLD44MSVA7w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKqcaPNUjT1u3rD58sptPZS99KqX7qiyy6ZZ7vugtMA1JA5BkLedwmgnPqfhcQk5hrbyUe3WtmRrQL2bkLL9XH2",
  "key1": "3vXGfauVr9k832Pi9LtunRa5LiNiuPTmX54MpvkkUP3JtTDYiTwxjd2A3n8etmBPwMW6j6KHQC4PH5bXD1eog8Ug",
  "key2": "X1avwTj4PRuHpdkcUsM5BzTREwq5H7qmGb4VZ3dLgvctZS4g8XGCdfm1LiV4Fco2wnn4b4iRUfD6BTdSLzZSnUJ",
  "key3": "5Phjt7b2BUQqmYTSH2dvUA28dxqKDqqEHgR5vhmjHspusFUPMqBEcaEaimUPGptyRR5wbQ4HLtRTG7CgnYUNDFac",
  "key4": "42aJcy3PowunQ1yPkYRGs8a5e5UQzLRf6qf35QDuf3aKFdWY7SrA4PSudEfCLeAWx3pYMtgnHXGgcYioPZYNjZLJ",
  "key5": "3oPzh3zBiZErq6vDjbrTEx8eM2txMR4Z4R4t2NJUkPpsT59wRXfHp63gh8UzWL67D9zQPbt6U73rTef8n6qDon6m",
  "key6": "23bU5a6D2iEeS27pbzWLcBGWpB7eMbtH7x2Qg2eLMrZe97vxBjYTtCgj64xe1Qz4othFLFYYN59rZ12keckCJHDw",
  "key7": "2eyVmnFa8ipQXDaymBKD7ryP77hdjCWbXxpQLx5JnGEuK9LyUrebtMjacdTfxxmconBRLspU7Xhd9PdDZh3TThXg",
  "key8": "3FMvJzXPnep8vJDqDq14cBs6bgppwBVkgjigL2pAtGcpdWY3aMsjkP3gbhqcakAp6BzouW3iKNprVdjCnC6NDPVQ",
  "key9": "5Lbj29qFQ1nur2yU6H56gWUrUPiRe7sGTr8FfJTbBnSd8NHrRgRZhAnWZUBAbZ3iTeZmow5iEHeCmWZxRQbGDM22",
  "key10": "2qAVxPsbaJ32Cxzuwbq7amkktnM7UXTjJwPuYTk5dRUBQXFJ6dHC6oMyC6w6RgUPoXKTwh2HAuV2pPS5PccDUZZy",
  "key11": "2PLC5skRRoqmLUpkyRLqf9u4tamptkAXnNPpjBKHGXLhgeA7tnxKm4Pk3PTjCyeQcXBPnAZmhvYPjuoTZTn4zZ2o",
  "key12": "51U1u6GmAujSdCh7bnuJvn7ppAeozsh3Gy8d9w4Mzncg2jTPwRgKTAPFLnfV5MwcSp3DBg4nQ6Pp7V5ZRA6Hywtg",
  "key13": "LaMPERxhV74HvmykPrqZFTM2atkvcNfMyEcrXXCQTqvv8AVCQgp6UNMGWnTgGMT1YQpHm9Ry6eRNs5tqG5jDzpC",
  "key14": "3gNYTL2gkbxZA1Z3eqfS3iAtp5xXJwQqXm7EpFtYd65P5vAnQ6qVRZxYTr3sLNFBxS3zRXWDUiQUrtKsmKMrzuEf",
  "key15": "PJPmSKkG9ac9kj9LUTbox5b1AEED5iSnZmoeuzoDZV81eJwErm3618M2hpwHdwYnR6tQQimvLYyff6TUp4pA2uE",
  "key16": "2xi8DtNFZsJ4XfkpNuHuj8KPZrwqq1gNnir9ppUkYReuyjjTNgCDq9GQwqmU6aYADPfirCqKqwh7R9iutTkGKSFa",
  "key17": "NfE1QtB4Dafwwm6zHkgHdsPgcidWSETB5mnW9jXKEqffq4t6Uo9QepxZs6DoEzZ4foPmguy444f4g1Zji6JECqH",
  "key18": "2BTD5qsAghitwBXb4kQSP3vDpWWLx46oJW38gFKrmEj4RqohPuV7GHi7CaTKLEabAozSGXBLoMj496cqcqv5XZQh",
  "key19": "3Cr7MUg8s8QDPGeH6DfqLuiACLPPe4rWxFBxJbvhn8ECvEdDGNgxmAoYkEMc8Up1QrVCN8GDmvC95DZuMokn6wiU",
  "key20": "2SfFQgwRwNn2f8wDriUwUnLwe1vwBpi8wsRkgR7HsREttkjqU3h4kWz2yxmRmGcmHKsgR3Mhy2hdmRSJGmRVXdke",
  "key21": "5JcjyDnAhkDW5xdLxMjzRBh94ZRtQU4u6iaEr3vW79zFsThGM6fSCaofZntL8j4GX2ZkU16E7SNhjdxmgwyag7pj",
  "key22": "5FLhvUDj7pnY2VAobkNW8eFh9NwVPgiAULmdLXLTaYC18p51DhAumR6nmTPHt3d7Ku8FMSC2wsdXuXtjfCT9rZfn",
  "key23": "fBD9BvTwmTYuXRLoyJefW4dh1hUYYQ1Vbwrc9aBpAELdBGf9YiHg5GbHSCsdwNpsXR2xEwPYJt9VCEXfHjNt5HE",
  "key24": "57X59xhqxJWJG5w2iFUiXu5u8r5mEQrhBSVUSKmuJ4uE9bVQgh4UpunbiyTHyEB7f7F2PL5ZECkmt7Z2k3d9gA9W",
  "key25": "dy7FvGJx7fpc5DmJLY7pDN4GXw9sdNBvHYzYbMcNvjzwv5rDnBJX7hTkCzwcdG4EvpL2gG9S7RBRmwgTKYQ8cpG",
  "key26": "3iYxfnpufwKZi6Bz3TDA9DouGHH9aKfRt8Y73GnfwNrb24Tccse1SvxMzpCRLDHiBMLJ7hUfw2d969HXmgoHTtij",
  "key27": "37FxscY2NR5EyZ2AYUrbWfUKJQrXRfDZ5sJdkmWsMLYVSJbuL9fceK79wmg5AcxjxJhB7XSMxTZrqKXdLG92mzM8"
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
