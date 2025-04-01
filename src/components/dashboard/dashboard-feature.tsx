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
    "3FWdjGk21u5aVVeT9nMP1dPB4xRNzr4m8SkRZMh3StdXnqJn7ejTxYyBBiSajVAG9bmGFwzdj49r7o5GTGmCb5rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U8p1bmQKXfv4coZfaTCiM8NyJ5KyrdZ86ybc98td77ZQZK18WogaK5LesWM7jQMUrQu4d5WpKsQfg6jogjntWiQ",
  "key1": "4G6ia7y64AwFCcz91nPVtM5X3pp1BvqSDkB46bktsFrZhoUreYSHanWdkuYguwRDqGaVELtyHqTMQkyhyHwh9aTu",
  "key2": "3KF2oxVsympUbDBCxkQDChWJu4Gx4veSioMaUT4FF33X1mq1AV3gG9BL7HKQbribF1vq8fvnEgvGwbXbU2dRutVq",
  "key3": "3942hFz4gudX16LYrHdWgxR7LPuGpkMMyExayVzs2GKLqNuocD16Xw8kZqhKLguhmEWqr5QRFmrnzVhWSujQg2ho",
  "key4": "4kaY1a4ZGXmycfz9TaVQGhuRfJFYynCBWn2xgGdA39RdYa4TKjgTiu4fGj1DVtpNQfsPbrNhVCnkNxSdzUjaAxhp",
  "key5": "5AXVFPNuKJN8vQZ4Bbjs2dNuh5BiEGveGhPQYwT2Kp9CJEvreDUQP1JHxX5meeb8v7RWdaiY1gWt3AUzdT7MphbG",
  "key6": "2BXhcpZvF5wJv79WVygtZfChtnQKwHVYzjisaq2nwJumftGTL7BSMC6G36MRfVjeWjA3SV4TnUwTqbLT4VEeL1m3",
  "key7": "2kPHMwjPaJj9uWkhPJubvVAPXUon667wFpA8pLzxuVJsjZpb7NY7bYozzJ9Q8m2prvHVFF3yrKGPC2YrwMkreHgn",
  "key8": "56Ao6LqXTWVnuPqcRqsZSAM1wsJkz3ZpUf49CBn63xqtNu4RHRyXdzwDwbTMCMmffwnvvhYsRafTVhJFGZRhJfFS",
  "key9": "4kwAN6umjjbVDn1hHPgrodDGjGxn8QZyGNLMvn6Zpv4Lk2mpgRFgz3w2SxCi5MDKcRto5hVZa4F93MEmsNh8sizq",
  "key10": "4YzZcXYzY7apmEnAdSwua2DcKLQnpccN4awi15HJ8GvLfnocuNqYRLxEcn6nqT6DigzYBQ6befaz7DjmJD6EFgis",
  "key11": "5wG46cTGnd8ixPXMMNZRnG9CwRte1UYBAWexDp2rGPnb8BVMWezcVaRmk2EbQaY1WtWjVioS6uHnEE5FVo3Mz1Ck",
  "key12": "2QstneU2xistqqsdzUco9RfSWVGXSqvRcgdfwXmcw1GMPDQ7N9csTMDXS2udDpYZaW756YPk76YTcGGXb2BLuBq1",
  "key13": "4LfgbXVancbU9BXDEVKtQkXKDefrE7c2ujzVmdDPppbX8ysspPmDTgFhgNHDfUQ7HoagrTfAqu7WTzPPFm66f929",
  "key14": "2pH1xJuWHNHakYjavqJnimsQhPcMtNsSQu2gHyqq3i7tQkdjP4e6TVH9HXJpf9eEuCJfC3W44Sn7YjPFc9Q8kYn4",
  "key15": "2Kp6SbLWJ52dtvANMK2ZQabK8QvmWeuuwr5PzoHPGqNLpkQ2BijNe1dperbxmxAFrVEAPPvzvAaNhGFzKPP6ygKu",
  "key16": "2WrkKyxXBtHSKFrn77EMsT8H6uQRpiyWpcRNsP3ofHpyNof145z1ZhqW6brXEcRtYWcy5M26YLxEZ6iArdpxW5o7",
  "key17": "vYMSUVePVK8qwseYvHQEFKMie7t9BFyER7n8GXFjFua8FasX4wGBiKnd3zfvSMtjjGZqUtktgqHpVCzx9Qhj93P",
  "key18": "2vMJJT3Tp4EbbJM33HtUwNmV93MrpnoE41GYCZEMJLZf9dbaw8BuCjZZ4k9D8w8GLtFUqur9yqK3LF62KFeUJ3Tr",
  "key19": "551TKqP4j1LjQePuq5DiyFjpon3TndpCN1VmnpEdUrZvbHUS1UyZUDKjrANzaGKGvgUepfTcz574NBa4eGmjShAR",
  "key20": "5vErwV33KgQLuihiCdWAeUYhgbooXfx4LRhFZTde8hJic5YM6Bxtd6H3sJT2bsS7W2q5UVKfJWjfEHVuVat3bNrW",
  "key21": "CmHiMFSNvuzq3wPxj6BiB1862CTic4YWNg1r76Gu7Sr9J3PXtsfCZeTHqaQ2sV5PZPQRPtKbdBoXvXVWHoxFC8d",
  "key22": "458cD5z4FHS1XrEgR21gS1wr8DvKrTZV5jtqDHN594r4AWhkWpZFzie1RwCiA91t3DVdWJvnu3Zx6ehkhDQpdU5s",
  "key23": "3k6aD1Q1MkDNgkWMsebvskAcFHgQwBR8giExuCvMTzksJJEpZ5Mf8EcVUnDqc86XyBeH5YbnDNdcsjUwKuVZVyvX",
  "key24": "5PxdaEypDuMcSvVXnvyXgs6AStcPZuTjKttN8eri5Jcnz5H8Y69yF8BXyWcyEUJEFjZkRxPoMr5GrwCQfnNASDTS",
  "key25": "5oWK9PNThoGxv1J9Y5g9H9iCAUvbUsBSneeysPCu6QXYWiA3ncQxjRqsM7h2evN3Vp7Q6wZ6xSZbQTfysDf1Uyas",
  "key26": "2ZeU3v7FzKFpfCFZjzAr9DTxfMf2xVbhMN3TbcjZEbzmwxE5fHbJq9j5wZAqvEinKaFRJE63TZuHJnWNCX2aYqYq",
  "key27": "22BPQ6UqxnTDHvpBRQj2XSZC7LnGrcanpeueYEjdbPX85h9PW1C1YzxjRAPBgyqoVTvi7B13zLDJ8GLS5KvrN7ZV",
  "key28": "BQ5gxUJnpJtk56rdU64SuygayDkHS2Dvumy5ndAU5KwW5B1VmnThFsb2eJho5VHLH4mTK8Vc817LHiDT8wwkcnA",
  "key29": "5qwT2S7W17thd5y26x14ignLZRsmC9Pz6juB5iheak4GfzL2BmTGrfcVujd24NdaXoH74EdhUmvEiz9YiiaBVHpC",
  "key30": "e93TmhE7Ug2UbF1BFJpgf7kGAAMtEzqfLp5CHwKdLP7eFSpe1cHmK3jzWdJS8qmNFQPK3pmnaN76syEtRM6UdSG",
  "key31": "JtfDppAUCxK93z5brF3f8ZuGJHsbgsDtfBuBxuXJ4ch1NipjQWeHbE51J3c8gb9x25wKMqbqfCqS7NgB63G9k8X",
  "key32": "2Hi6Ud6S54uFg4adWVWJKkCRbpvj18kvniuTDHHGRJK95mRurgqjSZv6JgR3DXWJV1ZH8hw88396Mx1V9NvQpgvQ",
  "key33": "2b4CmF88TJ7aXE7BwN4gTuJawb8smGSeqkf6xAreA1ppFK2LhqECQphSV2sSGUiaLV2NwzYMrFsRfv4nXiTK6Hum",
  "key34": "126nUMmJ8NYMddBw9hrYunu6QtohfPgagL1PFSxQxGYgKk25LRYaBAksH1tULQ32kh9kWRZtZbqcafurvyr8iuNs",
  "key35": "65Es7iH2GcTfvZcPpWLiaWUHgNvGgGDTHboPYvS95izkB8KZqoPgVcYQYVURqZCC3dPdr8cwTKP7o4TEx5Hr14qq",
  "key36": "2Z8WE8mnjMWo5dDdaQFmnkvQYrnVVvMYTFrwfn2fYgy7ujXD7vjRu5oWTMnQz6piywTKCcX3wuGkNgiffzpoVeA4",
  "key37": "4jQqP5E8Zt5e6S3DiiTFPSq5HzjZiDmtnT2FVekYbun89PAENJSAeTGB2tLdNe52pLDGFgVSYDVkw1MPNQUN9Dfo",
  "key38": "2e6a35XUgQPCYXsJS1BGmzrMZwBjeZ92mF7GCLsToeH6JyTyJzEhvi8kxXz2ajLxGMHWcxR1PMMkkjaxA1NkLxo",
  "key39": "5ka7b5doYtaq4puyrhzjSuBftg8U3tZYXyjnMa1Mb7MtzEfg1nD99sNQLakfoYQ3SboeKrqbw11FycepRJYTnvM4",
  "key40": "5AAxdBLn7wj2voF5tWaj4tCcSp7kmxReAYfBDAsT6rXjKdeTVgMZsh3t4Gj9JwwkxFaPWUTmrHuakyAYXCcJJxf7",
  "key41": "5fjdD9Jkx7A2qSK1iLGLvs2LoYMw8rfMKNkH2ZwQzgFSprafh9jpVWEyCYBmxmafnq7cg615qHbGGahB92vmkxda",
  "key42": "46H47zTudD71UBfowvfBSNkDHXFmnjpn5WkD6Bzn3E2sojGEVtwMGFdzPLaCU7GN7rtEbPd7U8phRzGk2kkAFaMi",
  "key43": "m8xrfZMPe1hRz89ZfzhAJeZqjhPPaGG72D1esj4zJXpJGqRJQovuXccrQQ8K8SL3wFFZAfurQBujx8hmScA52Dn"
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
