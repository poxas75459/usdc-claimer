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
    "37CLCzFk41WUXBzPAXPwBcy44WzZJjtGBpZxLNx8domimKrgUmcgwf7GrK47FEKFpvtjPYUcLhNt7CMwiTZDVRpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QVddaXtLymPArChjapZhUjC7YzGVNy5KUxFVEeKEhrSKJnNX3WAxTHmERgMQLGsiyj2cMX2E3yMR7yZDB3oMWD",
  "key1": "62tVvrsJfvsjiw4DSRC9eaxRipNrLVRRjPXY4oxQp4ScZDnLW7Z142Nb8EuVijNxAbxep1MtKzHsyhBXUXD16Mwc",
  "key2": "4pkeTVsDR3sqFDQUXLB3xTtn6mgejuJFWuhGHRYy5oT8bv414vzvWUSMVeEpmrsxtdAtnZY6d7cTZgNft8pqon94",
  "key3": "4jpcMZiT6HZwYFNrMwbfz63WyZ3Ja8jLa7fejsig2absoJM2u1rQ3HMpUMBTXAUJtTp7absiBDyRkFiw2cd22FJf",
  "key4": "K5d6mEP8TVef4er8TBQ6rvSaj7PeqvJN1YqAbRkgb3u2qJXR9DnK3aU3BwnKATF88WGu8rdSuSbXkD4pWknGDX9",
  "key5": "2yAWHMJtHKSGRhHeKyNjKKg9P8vRZtVXw2siTunjXe1mgw9i8wpkzTpHnRa4Cf6UvHAXxuGvwN7Bw6BH77kcm7Zu",
  "key6": "3AiQFu7Uuz2E86GGjFVVnbz22ZCGGeKcYeupTM8jUwfBGqYpAf9rQyg4heKr4xTc7ZBY9aANkpnPckhSsJWYGSds",
  "key7": "EmJ3yybW9oHorhNPm7Yfxk8MiDd43iTzNUAC7yEH96d41mXopGTBPK7Q7y5K1BHmQ78SscniHieZkELPpgTxwPR",
  "key8": "4DixiA9rw4F1F7ck3RdfZfTdS6vi7zHERq7sRcQSoEuN7d9Gctzhkxumqz3vx5inTZ7ympRL1PqgEad51mvLnvX7",
  "key9": "5xRQKrHpH2W8dXhQojWuwJuqYdigGY4iFtaEGtcAVDKcgqaHm4MWugCnP8pkq9GSS4ia5f2X5BYjZAvLJDqRvtfs",
  "key10": "xk8HPRDFbubqfa56BN73tAvguiYV8J5eXGU65WtLQPRm2XZiDE7L92XBNoJMucFjoh1ehQhQD4G9dQpG9snbqDA",
  "key11": "3tLwE8EHyvWiYBEmU2fM8f8vYMYMRNDdtuiNKS2JW8mP3f4HNE4UTf73LFBKJYdVpnbre1TmCWh3rqgHvBKtg1tL",
  "key12": "yHNzdcfjQ9tGbcy1SWmNuAj42WyyLxrr2sorYh5jxJdpFS5Gj4KXNSMNLaM8MheprywdgVqNNJQJuPVvD6LjWEb",
  "key13": "4eabqjCr8X9qZgb2kjiU7nDjMzCgqSi7CLs8uDrdiRJAuYf6NxyKofPHMXPMrgYWAqLvjGHkTk2Dm6drK8EbTyiv",
  "key14": "54rjk8HazuxxbqwwzM3nhjLYGj2gHGNfaeDaTzW337voQVJjvDy6uYr21NmJkdedV7iTM92suKFXvjoGQQezU3Ji",
  "key15": "67fjXEsDxmVZ5PzgbfUsZboFHqCDH7qcD9PFjTWtrSoXoufjJVVEPtJnwEidrHXMHBsesyoHn8ozbmsYeyHWeLFs",
  "key16": "3SUNhot759M56W4MQPAE9YKzxoAt2E79JUqNLVXoB3Kfh6kmDFCGKLqmrfxNDryccxNMQkG3scbqWFm2PzCcY1sZ",
  "key17": "2eKf7eEXPumYipxgwTgXswq4CkVbKQ3iiwGWgKZVQaXC8pftQ4Lt4fdyzMymiW2ZPAoyACLyYWrpLCRq7Rtszo7S",
  "key18": "5znC8PSANj5hX6b1UGzXREGMmp1zStYyRz53tjkLRbLxMaH7T1tCNuC98t6eK3AZFbK14aMb2tqYhWUK3dMAdzUR",
  "key19": "2eyB1B8af5B7bomjFaoRT8Bus1tgvptV8BZzUPFrSp2rBakwAfA9fNCtiQ27PymZi3hhbPh5BCtJekKbnHkBeLns",
  "key20": "522PgCX6dvNaHBBCFNG1iUxZRVLoPkWEGuaN579VrNGWEVzrYXxohju3CqXtaLeQJVzHgkkL6NJYSnbohJ2ASmbx",
  "key21": "3mVCpWDhzSg5uL9baVKc7kr8RT4zeq4cvqkHDVsDDqYGL4SggcowtQFsrh779pLbM1ot7ednW8X1CNwPboxb2j3Q",
  "key22": "2y5r4bdWScW5gyE6mp2wwBXuD5C67V94z6EHUCHkDJz1ipb56kEdVV7n7tsh7HDKDSBnGf84Dhqrv2Yb9PCmr2fV",
  "key23": "3Wr1wufMduMk8aYF8Qm8U3moUZ9fzr1XLwHDv4MUeRd2MVTz9wcFdAGLX88Xq7VoHYZYExNaXzCtE9Uy9oeZU2EP",
  "key24": "3kd4Bts4JbUGc6nDkcD1a6AnD8G4SXGdnRZWniF5xPCTBEZzyNLhnvjsFqNcdPi3NQckTBWKPUfUHpQppijNQ7TT",
  "key25": "4icqhvHSG2SiQCke2DWzCNTwyX9ZRMWckvx1uxBQ6eqWTTqW9fMfo8PaWkP7JRY8m4ieCuJAeXtXyxosFaBSetds",
  "key26": "4YydZm4DJywMvYdJtzukSEqhGtnfsruDB2Xb9PtH5ajEGk4QqhCQraaUkbFCTDXUWJeYaPKa31kWvuNr9RZSHFUq",
  "key27": "3w1udx5vze6j3uAz6HMfrUhnpRGiyczYKbEXJcosfn96azcXbZ13guL3sWYZFDviJqLrbJSHoXB5KxmasQKToMW1",
  "key28": "5Na1smHS8wcEovyN6CW6fjfVxcjgopW7WhFU6DoS2PrATY4cEMGSSseTfmwx6ZDPYDvjN4DuaKHsAYGuzKtpbfHF",
  "key29": "3gUAiswjQsPpdCzupzt8ZGHFrpz5hfjhTgrfDkRKCPMQYFv93FSGJriBQtpzUBgFkBP9avFivqXqZp5yx4owrjNk",
  "key30": "sNWMv1jpASXuGXVvh1gQry9YToGS15PudgY2fqAZxkCFfwyktYGzBk1RKg7L73YhK3qcErwyXkvXDThAxfiZqjS",
  "key31": "7b2qx7JMrTRbpsZe6jW19yH8XH4rhD8XMZTq3GBP9c16td7qfvCP7AeEGAgQDZDLfDxaoHD7YYRAApbQfwzXmiF",
  "key32": "fTQXu8xkipJq9ZGPr1gYBAGBCRhXvQRWtESQjn7tNNe2eQCh2CfRnnaHL4tpdtb4rvn3Nxt7M6fiZf5uc27zKBx",
  "key33": "4g9TdmgF5WqvEKByjnu3U5zucc65YVikxvbEps5mkq8RtSNmf6ihnuAN4DvWScnxkArPtKgN9dTDuNPPd8nbNdzv",
  "key34": "4Mqeqgj2uHVBTuffDc1fVYANDbtAv2t3pRwTfVBdwNPGGom6wvh4Uv1t1vttDhGkgWyzJz3WoAcyrJ6ZAmh3hnX7"
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
