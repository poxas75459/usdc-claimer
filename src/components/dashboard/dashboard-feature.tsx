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
    "X4WZrbYVGEcQUM9N4YDbGfeE1akKK7J4dPv4WiPMQEkyemisCRGsrEpp6dprdD8i3EKpQHDZdwWmFphuoKFRjdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aN7YKB7uXgeNudyctmKY8iR4eGDpnCeBApHwFetK2E6NTz3jJdMSHBZymg5BWMntbEsw5qxquGj8sMQjdwSdTvS",
  "key1": "2XYaoxaxNrtjYLWJMn7c7WbAghDi8pDGRqWXC8QwapyUGMLPPA8AoLoDQtrjpXiNS1JXJzY6x9QYdwKhMYRrQyWW",
  "key2": "2k41QkLSbCsnkXbpffT9Ta7iUU7TPk4vNJhaYq8ZcHiuRca8XTs8tJNcVdzveoo8y2oygMUHHMEAJi6fLU9qAUyt",
  "key3": "5pgNe17mrdCqyr35y3Jfku1aRT4eckoVt4Giji88VAvzjc1cLhX9sb6NZDgjPL5TPfgXYRT8qzmKbSqV39b5v7iz",
  "key4": "w5C1W11yS2CAowGu7NXqPeVv4oap92nTs26s7qbtxfnzxiUQkPCMVuaJHgC7dPXXLqU5fRKPpLWe1wPWWrch1j2",
  "key5": "3YXDoZXQhCBA6UYYLEiFTm2YXybPrbm4CgoJDSesFdUYMEZcwLfsGZXsHGjq15bwUiafXPmF1JZPKyLZsyTL9zSq",
  "key6": "5YQnkmzrzMeNGfgRBj4yRtCTVB1qL7We5Zqtm7JJD47KdmfYXnFJJtd33NYQyaDjuCeZVpVKjaur2AfzoNQxvgK3",
  "key7": "5dmV1EQfJYjNVJ3EnbBBxn3ABg76evb5AB6B5q48VQRaqorfHVRmB69FrNTkaEngqxW81rwbo2yywcLw34LbY53j",
  "key8": "4EJW1nUNLccKNy6kZyBd9ZBfipxs8bRHeab1R571hMAJh4dDWEV2QjbkTc427nuRM244t54rq5S97s5sX5SiBFuG",
  "key9": "Ykoza9UGbfbhju3C1CzNsFaLNkEqY5cBFzp1ft2qJk8Lx4eCZ1s7DstuC8qXNfDsqE1GNu1Rqpm9dJL4gHsi3Aq",
  "key10": "41uTVcVQfVUQYHz8jGgjqUoUx6X6nLmmvekhFz2brrs1FCKfQ9b1b8vBpAG4wGtZwFd9UsEK6CiCycPtvajfexBC",
  "key11": "2ajrCLMvPdGJYKcBULqZXeLQFbNsXrNX5eySRh3EnMuDJtmAnB3QtrEW5FU2T6dhR2pfwVkG9QhG3EiGqPbcAuAe",
  "key12": "36U6KYZmfPGgwUuxPHuHnK27EWbWSy2Gdcvf7AgJWFqq5BDmCP8qSNcqkeug4geETTjDtX6E1qtnVhwshTKbmCoT",
  "key13": "5xpQwFyGX3M1SDMk1nZDUpGfoh6c2L2KF1MJabPgdN5Eex6BqxFpVfnJpTkxpFN845XABWjWNDKW8BeUK7aE3FQG",
  "key14": "7Mg45FD5vHZjQxqE5Act5vQQGqzbnNg4YVkvYLUKnaZe9gBCFTHvv47rSc1emuBa9WZ35sX9iv888cB9LYa1QzN",
  "key15": "4pF4HVXehrpASwfcjF4hujqJkdUGKLGpY92qebPBkdDjgfDLJeuxKomtrpnqmbwAKk6pJDA2WAP83DNVgs4qRCvd",
  "key16": "QCopufjNpxx9Lu6E8ntQxWSeGBd5JGBqoVwAnDEvQHPVonZoqmY443sd2SyXEjFB9WsGdAakjggZyVX5197TyJz",
  "key17": "5FNZNGaR84mgPAWyGz71VLEu9ViCczdfVDz3y2a3FtiYFnRpvivPkuUW5yFJahHaFEDaaGvNV4CeynSfKuKgkNbP",
  "key18": "62ESAdMou9maRkra5hScJprC1CsioTiqkUrHNTicE27axdZKcTKjZSdiiYh9GpQTcCR2YwQvKLs8hTmLJD9Hvtio",
  "key19": "3qWtDzrxsFfxyVjqhGcvqpWWiDrFfFMP7dDvf5g1AvunU9qkRdt7obWfChJ5dHcTtC6EVgCkUXkWrNwWJqqzp97o",
  "key20": "2DQoPpdVzB13oNBDd1YqfLBXuPu3KpTKxQmJDbeXDFRkxnFE1CmcbKycXjRHyVzxfQ6D1EnZPQF9VCqZ6eR7UThq",
  "key21": "4ngGszxbHpx2jB6ocwDUgsUBzyCMy2FWf6eEZc84b6f9Szou2bxMWdRhii4YEoZuoevoqzpoy4FywCtSw6RZWwJR",
  "key22": "3Femuq2CFFW9JKAoF5zxydCZuCMSpTmdchKBg2qHBQudV3i4hHSXmQGjbNZPzKee1JcNZFX9TsqP3GScxB8rpt8Y",
  "key23": "4K1HjVsvpTanUCRXNe9SA4UhUNfJdtC6Y4G6TkU1JymT4Ev68Lnf6Wzv7gJK6CCQMkfzf1xjjPHgRU4no8aBfCGw",
  "key24": "44ZEHHfFN5HDYUVwyNoDMpT1NYxinqS29tMDivz6XFSy6jzBzeW51zBHssf1eifM3eNYCbaA6HBaAsK1xP3FfCjD",
  "key25": "3ubXdfnhHHK9f75UKcRv6ArSJiRnGsnMyqGjCCcEJnRz3YoLSkXtCcxniVSkWDZQvfMHzacgbxuTcGSUgDA2mEdo",
  "key26": "4qi5sWGuKzpyJm6o9fErdcwu5S6q3SeWomScQa63Rbf8p4dhPm3rGkdY9kEebzmN4hmAB67LeTCwUhPKDPtrjctU",
  "key27": "4AMyNeecUuQw4XGBG7KPLPteGnc3v4gSGh4KzgEqhU34ABZH176giQdR2PrHJbXuWHWTLp2R2pRD5eXQPzBTdLZZ",
  "key28": "J4mPf6qGpCyCfyzoueEDM578EAsQR6BejQQuFbdPwkssCv54tgV3G25h3DbasKPUc5Kacn1FQmS8f6jLGrGXTqZ",
  "key29": "5bnYjecvCPDArhsDkKn2k6VGaxQSDXhFFu4JokJTHbraHw6QMpNtYducy43wxGNmiL1XDihWjVUtYYu4APByUUQN",
  "key30": "33UDdQuLxuyJ65UbR6AFtcXRwFFzo2L5GZakxK8i5VbrsMb2QhEonipxxWkie6bRPU8LFsSSD1jru9zviaj7e8dw",
  "key31": "aHoFnm3yR9MSifX9BJCeaDZDKEQMi1L5xStwcYGRCCSjvFCFs38VzevFnGPU7vWWeGYKkiKP4CbEyxBEs4uzU4h",
  "key32": "5TcNHB5WGSjUfoR579jAknneembDnmRfj8fgXQzUT7ZdN3CHAaof2roEhWcnzMMhCUytbXhg56PbphNhXzYydVgx",
  "key33": "3P699ohV1ZxMoPwFaTEcrarxCXeTwGLDgJkYAARRfWDyoj7HWQ499cX82PcC9nASjTN9NuBXZh83cPiZMNH3CRVu",
  "key34": "2uWBQzKjkpgw3ZmqUbecsezP9z1KC77tjZsRNhpmdgV39yyNNT8Pd1UaSpofN23LmVTTKAGUqQbM8DZ4gPoBC5wD",
  "key35": "5aH2hhZ4q78i1K4DpgVrsGNfpbYfgqn1iTmumhBe1E3csGBjtFkMnjeEr2L8C7HozNNqoF28vgYpfXozyYu2kegw"
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
