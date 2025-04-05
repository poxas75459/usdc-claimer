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
    "46dGA6YsJfiQNs4A2WVD7b7wwU3XNmQdZKL67MwD3jBKSHR3Zgx3kQvZNqRh9j6y18t6M5dBTGpuY2uBHu83RKNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcZiJ293F2PZbCSxx8kGziCv5W5h7zXZD2UwchHi42DrpH96Zh59MscJPAC6QTFgFbXej3z6Z1apFQD6Nx2rrQK",
  "key1": "43poDYjNkTS3hrEwnkRmFGv7JX4TEAUPv6SQ5PKG65RRk3vGGwcgNyt4PgVNTBM6Mv8x92U4yibGjt9ktX25gfQG",
  "key2": "StzbRyeqU43gzPAx7kHmXGiVH3GGoJvEe5Tm7wJwvfQTk3nMH2sE5ByZH4YoYR9ko3EEnzdViaz4TeTNEE2zBPD",
  "key3": "3HKM5bRd4poL6e4xQPhQPKdzrtFabJxinsBZ7tpiwrJkcKH4CJLEE8QZsgk7csaDodeNAuUSjVAcamsWW9GJ99dV",
  "key4": "386Z4UyKbYbFRFUpPdkRAkP4FCvfdNzuhj7iUjRWSEGhc9FJNme4vThxHHbdiCRTf5ka7LnsaLLBwTiJX6CJX1jq",
  "key5": "478z5xeJDpQPbJ7GwPQL6SdGUcTCLKaijfFzguFdAcjvZtPNZEf699C3yBaA1APBdkW5jo3Xert3Q42KV5QMfK8o",
  "key6": "2aLgGF9TYLhfJ1LAq21JAM892h8rbLGmrpkpmxahwUeUNopKLe5GC6KsyqaPU7zYqVdjogPaRDzuu5aGLxByyV1W",
  "key7": "maR9H8Aa5MJPPCLs3gzGpX74LH2WUg7ijEvJJZMufxswXSvKcwcoTgpYFRVhQRkD8K9NfM9xiMaE4Six7vEnKwn",
  "key8": "2kP3hEu3vP74ury87geLUSMhWBf2yRfSo2vsAeFT3tTzcJknYWRf5P48SjpZzgcEgm93P95ddFgjjibWCrmj3MWq",
  "key9": "N37yaTppXMZUQeHBrdmVAibuNTTMDgBPRxAjmnEb3dDSBAS8H7m8TFsZdJV4vy4PsYTUE9JjrNCrLU1jnNjHhEe",
  "key10": "2E9aMumgyCjzsJjpicHdDvcHRgnh5x8Jk9hvQWJS5ifZ77DuoKZp8HdJHztEb5XuP7THkqEGMTufJpGrMS5BwLiq",
  "key11": "66bQB7RYWKHU7ivUyVpxA1hvostFjK7wgPkhDWju8LoUvXFgMCh7Fbc8oPXDTB8bL2ktRMrd5ZRmz4hwsA3uiNGQ",
  "key12": "4XKXRqdcKLavkhocnePKCAsasjK4o4JS9uw5LnpjfZo9tn3sWH3BLeFmu6J1ogD3ovBLBuHoz19g84Sf1VdJpEvt",
  "key13": "zvx41uFdKj5vHA9t6YWio38aYhXQmJgUTxQWjo2ZBTutXqPY6XzGMX5sPomefKcyTjTcbQZbQmCuxDD3KGexuoo",
  "key14": "3L5wA4soL655MqwQ6JziPS9UVX7tN4cZ36T6Ye1ysTdgHh4BffyWiyWkeTDq7SApoYYJCHR7jqLSxLSHkVyHVaMa",
  "key15": "2EKFLjtbRoFxKUwC75dPqD9RWcJTY6xA4cH7ikPpFp77fezLjFrmpdoGDiQJRvTyMBhjdFKx9RnH3C4tnFGQnWAw",
  "key16": "Ny9G5iPr2DQspmGNorVcopu6atR9XZ15EJhj6Qs4firAqPqNDLmpziDQ8J9wzYTbszLfTTNP8329ojCPidYz5fX",
  "key17": "VdC3rMb3vpPnNBvXLmFvaV8kNpakD1Ff1i6jdrZCkLKnUtZcy3VDhYTFuzhijrXFoouxRoNwk9wmxyk2DLUvXx2",
  "key18": "3ixmgV38nYwSSjFnN8kSNLCkmzL4TrtBMnJcJUzZqPrnNabp9oRgnEzqjhbsDjFMLnE44N2RJKPoZxMAVUCd7MNK",
  "key19": "5rcVVTJhxXsXR1VFp4yNvPxhJZRTGzPyVPv8XyV81zQQ9hsRi3V94KTLTpzCCKyN35iGGN7bwhfm2jYZZaLsj8VY",
  "key20": "2yP11N1ebhUMPRXWJettbsrvj9CucbNazw6m2QhoRnZj1iUATdomrMFPGqqaMR7vSx4J5tFdTLBdwQJ91919xGZj",
  "key21": "3RbkmXCeeKrEuznDU5XqFv3Qd1T8SCj3pGy6XxeAXrszrA8FfdWaKVKCdY6deuzkG7qhqBpRyPJEfSrzv2VbKoT9",
  "key22": "3eCv7mLEx3LQqebWENnuhu9EQSELWA3ENnHFUqWyDnnHL6MY8PpA9rkkPrmAUAUoPxUhv97MQq3X3hA9TSH4PGV6",
  "key23": "S4VXkTtCrEu5Bqtqjc93VbfofYZ8Bki3NMVFrbP1dAz24vu8V1qgN1zoQa31BLbdT2gdb9rowZqBYZhsto8P5Ra",
  "key24": "73yrUfoErdHbGmEMLmoNX2xHkmDknU3EYf9pbsS9JcrvwtDj6DqCYucC5kGrofT858BM5W2eULi1baD97kHQzhf",
  "key25": "42WzDXFfdCkzFvzBHcp5MaNQkB9Qz7EoLMSNDeWDNHKoM5EndxVHV45ft3GKnYxYCBbv6eTgJ3AwKz7ZKEQXra8T",
  "key26": "2N46QPfyhANNiEgWjQCaCaY7tX9MyUk5iJKBx6J2Zp21BDQtQYqLf3EfF9p6oSbt4UxeHEYw8JvURPebhZSpJTK8",
  "key27": "2NzTT4PGz8zAogTXTniZ6ipzn1UyuxgFxBqSVNT9bqnAPDBFdsXmM7edUqncSuX7YTGBh3r8nS7MES9JpVMyZmYZ",
  "key28": "2r1WSJuHYTbevkg5D39QUcnejd3QT3ySFt2s6RkF8y5ZgF3BrTv7KDzDGMWArcadBN5smDw2j8zS4hK2QdaaGAvq",
  "key29": "5kuYjRqmTpAm9WViXWDvbwZtkDUi7QmLwtRtgr9j2YyVHETULkYk5nvCgddU5yQeD3DkQ9nQusDkQaHP6BGk8pJa",
  "key30": "5odFdekqBQFs9aUuJhTwYuwC5C7FXRKbSbEucn4rucwE6GDkbacy1dXEx4gmQmuLa9QZ8ypsiVnxQ14shAwzBcs8",
  "key31": "2Dk6pxeX5v1ErYDCFB25gtAxLTriBv3GP4nynyrjud4gFx5KTvENhwCqBdk1BwMegPCoFV8ZKgqq9PZawFthR9Ji",
  "key32": "3URZYb4w9GuaSUvFCspHBXJWq6o48WeYGrYmHkNnA6oCS3Tb9e3yEYNwBqBuvF37PGRgbBwsB8JNZzfGgkzWjDCe",
  "key33": "4R5DiLUfSXvPE3TxmXMPALMXvWshNmEuPdxqveK9xENBVd7669gZ2m2T16sKRMt5SRJCD1eXcjy2K9QTs9Q2TLsi",
  "key34": "5Ut9F45VEfnhvbBiRrgLuNcyzxjdJbfuYr3MD3QMm7U41LJksv53pNf3b1APPxBcecvYK6iDgAVxcdicG7Scp1Ga",
  "key35": "DGJhpRNiH6H3rDhA8nUv39yB9f1coWzcBxVCFSWPeAiWQoexxVLJWhR7xkhFZra6jEj91p92LU1s1MtbnNkAtdB",
  "key36": "3kh52SfghSyL4AkM85SRtLs2nvDwQcAmX2jhLKeWDsbscXCAJ5D7LPUY3DGdzqqJGdTys4sXktCFwcnGSzjfdXLc",
  "key37": "4WpVNSqcjEYtnAhBpc2CBoZ68rK9bYGdjwe7GkzptbhQXwPnvUD2chPGrQnvRTxnf7nb548yFoWP222RVNwKmieT",
  "key38": "4MPWWPxci4wP9BG8U5eDqbbiTNkAmtbGEuGt2tBfzXk6QoWWr4aEB5LN8buECdLvsoqBwbRGRmspT1kTKmhMPEWq",
  "key39": "5Ua7VycmHjMhAT19DMXHiXZ9xNFT46CL8W3iFEWKCeqYZNWHCsaXyf3cSV6Rg3TUGJ4XVb3xXMbAcqG6LhQcYAQV",
  "key40": "5eJ28jFDgWW2kfXG11GLB935JcxeuCf2Vzq45NbVE2Q6jGZ6P22ySfaAdQN9SpMrSWZMSEeopoYujjVB3zmUhQ6y"
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
