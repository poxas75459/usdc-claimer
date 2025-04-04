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
    "2LuhREcgTjVK8iw199jnkobFpppCGgh7a2zdrCHmPfhQsBQt89UcZT7rgMhWvpxHRKmiBaAgothG7QWiNB2cpPTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Z4zTAHoXqENxh1Gbipy4KQxVJiCsAmSJCnRTfWo6EZGTFBG7SQR9idQ1mvMCcb5afXyhdekhJcyrEtvoraysn2",
  "key1": "5C6Agx98GMGBHybuUq6cjGF2cnoaMXWQtTEzLBgWaTFYsLJfx2avAN1QYZT9Y1nPNUYd6SHrEp2ApVZHWG91SNzX",
  "key2": "5uXvnQ59SbB2JWWc81ufA1NTtgX1G3LtgZnrfv3CPxZAdHHmP6XPhbYiD3Mx5i6C5Ts4rWCTWV5C8NrR2GapBd6V",
  "key3": "2Con4YFoFhSgdC45CKny6DQc2EkLNfEYMFbzvpuHFGNpbUVfgohMJgVga8NS43TkjgamgnoC7Qv4URHp9HViysg",
  "key4": "3rExra9VMbqwwgLapoMm5fjNufJWmasJByUW9crWZsv5BjUEzZipnbRZvRZW4Unay6t5Hhstx46SsHtUKqjjk6FZ",
  "key5": "2yWKrvzMyGXty7NZVd3o7MNQjeQiMaL9m3sVRhZLsFJ9ua4tWTmBrNMDBXBttqUPXDZuiBAMnULj16QNFu9Zu8tS",
  "key6": "2fu23XkFwagod4L6KbZaF7RmM2uLzrPnBimTa5qUct9XYiDcM2jmPDno1SsCkDWWUTQKtpg9bKdaHXaZaZV9DmZZ",
  "key7": "2Ywdfqx9zYpLfQCw4mV6kz1x74gNvqMsp4rAvmXGH4sgaFUT2dfBpUZFW1TG5D5uVwWAPEBUdoWotVQp1g8PpX3d",
  "key8": "3nCur8bEXo2z41es7Zjjen1WGHogSpwVKVDtSEieXbAo5vBT66sWQzXAya6kvfbLWaw3s5GUykTD81WbLzr5hvKp",
  "key9": "5ELQsKZR6ZE1jiQ3kLjfHAx3dwffWuA5hCeywH1cH5YNidfcUhix5gZ6F4sFVWbFnyEcbGu88PNEUruLYNF3Vsmw",
  "key10": "4vqM3j7ejLZUTm4HJAXDN5x9d4JSt9WFtTLo5iVTv4tFhWckimwQAmYKaKPoHcH1EAyB7Y59axLMoENpGGXYLmzd",
  "key11": "5YENJk7GRi271CG66i4EkvrBx6JauchwLZ4zhs2A5Vc8GSJ8sqTt9c6iJBxCQvh4K7he3mvSjQqArfrnJ5oDSV2h",
  "key12": "54oY6yh1jEEnuAzYZYnUqWuF2FRbe8UsqxwnFmygQsf8faD7yhiYzk46vHJXbmz8Yx5jir6eYfS9stLpRDd4Y34i",
  "key13": "4XzZLu37fGXpmJVa4FVvvGaREAFKZwT2MmPVbAi9zmn8LnWwqxuQqzWW82bL1qZQuh6dhG6w7rx7CL5o5FdPDhTr",
  "key14": "2896jX1ywf52vu66VAzbgfUEjfiLsHVV6nV7HRF5kdFGmQE97gYzBgB572kEhcFWH1RtP33Zgkg6sexEiEB427Yw",
  "key15": "34p2kk4EvErCJ4JUBi6fpurzYbGWhT9sEarLbWbSH4CbfxWWmncJaryzCPwxnv3nQoP1Rv8hGZQy2avJZgyHetZm",
  "key16": "2x6RCGURmAU2GbkQGHGJRp4c5itBFUuorJKKbEVsbzRYRiNuRcfo5P87VNe8wwpVMb5fSjivfsWBDzkMrRyNNcDH",
  "key17": "33GKYTioZJi6D21nwKLmec5yeuMyGmNWaXhrPi5EAqCfYc1dEs85VQRNi9MYhftvKKvmCQ4Q8jPqdSSybj5CTsQ7",
  "key18": "3JuHmUkzeFUasNc96guZGfaX7QyhP7WQ4E5t8XE5jpP9AkNUsLJ7gkHDLadZGrnj7p5TJoiWbEruB8HjPK3vwD4N",
  "key19": "4HjepRisVtD7RU3YYk33yyRZUQN6rrJ2NK1iKDubMrB7ipzHeTLq24uL5C8e29M8LbWXh5NwhkgTNymPRT6bAHnj",
  "key20": "412cqDK93Q95K6eitUXNGboi1oYGKFfeBKsGhKV6mSik57UBQNVgjo5temF4VqNKGvpfFYRAf6yMeZqrKxRQChjn",
  "key21": "3Vt2xQrLjMLeVLihrVehLfVFbuNACp2zjCuANXEzGbiJChvj9qP2Qpkoo8yXcj81aYMtcPH4JjarBsB7QXxiW4pQ",
  "key22": "5C1Qv7X7weaEGpqoVE7VN6c8Hr51suDgYoktyq2aTerb23rnZCnrbPwDdirRV5VzUU4zT6QHgq4aEpqF4wo8tF4e",
  "key23": "w1Nb4RDmx64VwDXp2p5bNpWYj5dYBojpuV9DW3yHgonDFsVWH4yurMTiArAjXqEEp2GUDnpzgVesTn1em3dqNm5",
  "key24": "21owtomfMsnY9ENFNvL1WwxpVazZj6GHPrd4T1wzEjSEunr5KeF372qRfjyw6ZRHCH85NfPM6iTrNm7rCv7yMSnS",
  "key25": "5rcxVFKZ14J3yZ6opPbrDWRdCk8sYb9JRe4GMKKUK4KeEdAYPTRYt4sEKzto1E53R2WskbsVyQ1p8vaQsCvLkBX4",
  "key26": "26kvVPudJ8WEGdKAwobQCoCx5SAvZWCFNPWR5U9Q1MfaeKxf9DJGtM5iCwaefptoFMGcifiM24aDE5E6q1gQNFso",
  "key27": "CrESppERtdEa3bRTDZaxVUhuUPkTqFhkUB6KYhvtRGBEekaUEmwyxRYvdttGuzU6KCrjpNkoX8H2TX72q8e6uAL",
  "key28": "rqFjKrEjkE3eLH1R5LN8J4DXGG4Rh84xd7Hjp2umLSf5tPdybbT1xHWecRrRw28mrgZnVcFUipLDaoQxUM9gQat",
  "key29": "3BUFjwQM934v45saFX5DLtzSquMk815pkSHCwRfQtQRG6SnHTANXaiLNvuQgU15iUYq55RZfKftcctQRnbVGgW6u",
  "key30": "5kaLVm58v97VLNgPCfMfyiQY4FKYugM5Rpa2syuSz8RNP2FADZcC8SRabjcV53NoFfty3tohmsy2LmzghN1jSUkh",
  "key31": "F2iCNGRZuTdBUNFNNTJHZf6sxD1V62SfCRLz3Tj9pVvxmBxqDtqXqLF46ewMDKknwCjkkwxRFVYEYW8G11kG4yk",
  "key32": "2kYYwjDyDoV55MHNXtL3RX3t2qXy8RsSWqVjUYuHefxM9VJCUv96Qt4tdY6mV4NQVGF6r4kaV6vArVT41CJfCPgZ",
  "key33": "3P5GKEhjZZ51g2uaByepTSFQAKxXei1WfsUfzPkLXWazAXJx9UdXNys4xSZWDRGpQ18A3N2sFxktHSrjYP1FvoVd",
  "key34": "3tg4KfbytAysZYA71F1HMqXigRJnk8KozX7JfuMXR7o17Tu5hpUtd3QDSGguVvMZybFaAkKjWMHSSDVBNU28hx3E",
  "key35": "PyqXfXeTobbm5g5S2B2zm3HW5JjEjiRpd9gbCucFy6obJT3CXgXAgCTAcJQkonSDWoSGbzKr65zSHWC7QNhwPU8",
  "key36": "53FBBDKwV3p71dZ4VyFx96PSdXXWhKKUMHo8eF7rrAgqWy3jSkDdjGQ95BBE9XP7rPaq1uHuwbnzWYyareLeAgZk",
  "key37": "3EJb3a2tqvXUyemKWaCSbSJvx2kHn2pTkk6ch3SUj9hiPsqXHuvTXSS6uqHnXBHc8Gb4fJ2js4XaeL1YVAL2gr5w",
  "key38": "xgGjMPbBiNkHZSB6DLkjTZqzuZnQQNX3M5XafFe8xAs69FxLsywadnDMYciiAaag3dRwTHgDXhPxYziP1fCGoVM",
  "key39": "4PFtLECxLXvDar6QfGmiSac5EKXXnZ8yooCFi86Qsn7DkbMuQngyUKLPVy6UwyP95Tq1jB6A6FjmVeR7TKEDzW8y",
  "key40": "2pbohp2ftkciREMsrrLchdBwBiQk8KV1rYWMhZsrSQqi3dY1eB3vQms4CW3o9dyPKZtzbiHgHr5AkGWtPgrAvefg",
  "key41": "5BTnRi3nGgxLCqwXsnCtmCVssMiyWuQMYFn1E2De5pZQ81XBJBPpkLCNGLoFj7rx39WoeYtyyVxMt6tQUJQa8cgE",
  "key42": "4fqDtzsH3jVMe74mLRqMdtPnv7xzsdbvNh8LabDKMG1uVLzmdRk6j67GhgDCA13YjNGaDaYVCdNBKNFSyJXTaUSU",
  "key43": "2tDw4Bxyym8gkGg9oDsbV3zfa5NFS8eS1jf4d2Pp5boWWwPUXXUWEgfnGGyuRXAfpovanvKWYLKDmYH9Jo4kCTj2",
  "key44": "3rdDmmV4Bg9Yra92oPqVLYaVg6rkmT67FMmytHKyjRv5B4Et31qiyR6jMXFkuNQykHvyW59tcc5Fo4ixdGaDCRns",
  "key45": "5UKohEvS1HbTYPCCpgHrtRwBV5H1Zned1qnXEWAxycFv89m4nXMmNURm8iwpCGSfCtevcZVeXnm6qu19H4zRhEQR",
  "key46": "P2okvBVTythB9fNnERRGGKNEBXmKiFideEhDPXjtqSqCRa4rLPuhZFvtkzQQFdHQfcnm4M3YFmqjPeHtKzhogcx"
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
