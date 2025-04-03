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
    "25ZGg3bdpz7cbTahWUgaveWeQNZBNeKy15Sn3XkS2ggSRgDXF4chGVVk7ZVrL7CjKHbpaxUB9Vu9KAku4PVJwWvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyQPpagPoGPWtwuWiKhGRfZRTF9xutiUjvToopk7TeCCu8iXvWrPrmkaPKd5hgiKa6q5neZxHfYDQ2kueivQt5N",
  "key1": "5kuXr6HB9f577nBvxoKq1CDJeSxCL8skYeHsAnR3MfbyUFP1vnYMzsEox28fAoeNhgPbacKUWwhYhuWBSZTbmviL",
  "key2": "5mfbJ5Bj9dhn4fA7tGaLXLbX8NFUfLU5SiBd7ZewAMY2qWY5KUqLsyP8PkfDf7bxouYZEW5kMzhqAUUykFpzt6JE",
  "key3": "2fvsMQDCYFtJbque6gUSdfWSVEbdszy3Epv4vJj4oL3woVAbc9khX2Y3NNox9jaVo68HJDkPAZzN4TeQSFQizNUh",
  "key4": "vH4UP74VG5utTmqT2Ln1SshkTQFsY28Tc3RbopwoekoBkX1fadPiMZ6XyX26fvuRkzHGUbdqZbd9xBfQRn92pQ5",
  "key5": "4wCE21MY2A8Xs3G6nXDKEVNAoy1TKrkc37uL2ZE4n3aQ1mkALFEnYEJhRCUUSGMxq6pBt2c9iZWvzvG4ch6VbbG2",
  "key6": "3KR8SFCGWgTH3G2qXeHMgnEphXMzjnAB2v7B8At18PStAQfA61BQE1DxkVXqMb2ULB6PTSXrBUfsp2E1G6XFjYCY",
  "key7": "3gLpyHe8mrbaVvNR1wHdaAkRjKyM78cqa8pvXCtnJ6vb2UF8CWCn3oKgQJEVSxLj1WwRJz7jZFTPonWfJUvcWxdg",
  "key8": "24KqF8G9D1tdQpGwCLFCCqoxgDoT2vFSeiaXcT8Uwk3oYZB4vfzyjHxXBUzb75npHCkNrxTWQkDFkhfLxvadtkhz",
  "key9": "8dr468pfu2ESm8z75gg3R6SveQZEhDyHDwaLVJnD3Zqa71gop2Kp2avByyMWkP6ZQM97qnpLtNnReo97RmK2Zyu",
  "key10": "5zRuoJp9L8bTfdnzKREAtkiivv2LXFHnf7bMPLfQx3NR9u1T2JK7mERXA5o5tewmn7D5UbvRnEpDjbsEvDQcpa5F",
  "key11": "2VPaxsLBQHhYUsirs9ZYbWnqQPv994gDWJeRchGX4C8AX2bjuP9fsYPt4A1NQMPjfFXdKMBWK8YtqSvCeFjAJW52",
  "key12": "Nc9TQjeZemSJUpmkKtAaXPSs5LdNgxhD91KZfgUbwLh9VoNXgXsvGvzhe2dqzdKtXsWJLXpJZ8M1a8LFZVvLgTX",
  "key13": "29NJuigQc7PNLwKvZh2UVN2GBqxiko1m8dsyZugZjPCPnZDaqJZmgWVavzLKUrrmfUF5xLMN63gytJjf6TQPN8hJ",
  "key14": "2JTaAVnJY5aehcgz67wcaaEyPDSVFJNMoRe1XjcQp6MearpJpxqtaocfHpcdaczzvnm8fQ6ragdGo36D9NkhHwZu",
  "key15": "27AHuPAuZahbnhRhk3P1ww5YqSCfZCDQxYbvrVZMuP34PYznvpt1i3v5HMYx8MUpFt4kzhYaSRYHqbMSye8To5oV",
  "key16": "3D7J9ZmgyepSh2iGcKvXnztka1FTnKZigKt6kjzh4EVK4v6M5M3D97nSi3QPSVSg4KE7ypetpimwHqt7Rq2s421d",
  "key17": "35CHb2UmpRbWTyZNnU46dvacS2uEj6feQnKePojYPzutNTUN6GxSbMVdWo7xrpwz5iRSnAN1992ySikLw5jYa54N",
  "key18": "3BeSBn8xLYjKTkRY4AtTeJLzEebBZrvxdhnXLdycWGSrGiXNQpBWKfyuGk2REToVU97mZMmDiXC4FFarsPzDqMeC",
  "key19": "g4pL5qnAZNEBNB5NdEuBhAmepyXSVgZHG2oK5bveL6oiGBnq2ygp7VUhaM87bNvUgF4ANn4tShA4zQo1ukW2j2z",
  "key20": "5gV2BpxzevgybhVN9k2MDUWvSjwswq14kWeKAphn2gM4VCz2uLHFvZeaJ2FbVvozHs6VeUnRUZCoUUAT5pAWXP58",
  "key21": "3VdTtKF4PEzbjzifSyP8QuMY8CejCbVhQMuBS32zeLpgaC8dwo9cPEgHjtkWdHTM4nGENmd2HcrmGebnrg79RrjU",
  "key22": "47rem2pjFHkeMmbCdbfvL8chiFd2y8w8oGFsZeUjSgE6HJdKUg3d6TZbVYR69MYQiFbMk9jGuPe34GMvM4G7SFTF",
  "key23": "Z2drvmVao34QQMBaEKDkzXv8Zgxuwz614HCxGiUixFtAXvLABwrQLhsrmxECZTA8qPRLm59ym2BhFBsRYRDDK1n",
  "key24": "4XbjG8eMaRmZxe7mrAcAwZryHfpFHDRvyBn7ij7A8m4CfFoaMXaUuEuxG1zkn9pr53QGNtctdsgNMi7zcXHt6ATH",
  "key25": "66Yuxuiesdfbjg8aTRFQck5urDnVhjQFqFYE2DzSrev1aKpEmaeso9znCMUrwUSAk6rHgFK8mctAr89yjZ7LSDb",
  "key26": "pHauoxN4HPTWQz3x8Pvh8sK44QfYJCuYKEiQMHzPzpwkrE7FHHXb9zCs3q4mGA2hKnbsHRia73NySrGZgEP96zs",
  "key27": "24Zv4FfVaNzEkETa3TJ2DxjD6ZAw1Eu8xXPDqKbZwt1ByQgtPumYJJCVKbPzPG95JQTQ3oUgERgGbCfR1oFXqk3D",
  "key28": "2YKrvaPpHGmwRdL5h4UwPcemS1eBRPrgTPFtt8Cw3eqtJ4bPJHmbnHgPcrJyLCALcZuQ1vDKEU7TmNrQA7vNn3tU",
  "key29": "32uSG7TPswKG8mXjSuymYJ9TtgapueoLaLLEEz3XYd5jyb4vm63v5hfPyvWsAntjVQjUkzV92W7nVjKmkFXk1FWY",
  "key30": "3kYJi2EcJDjg5gssPCSxUiTh56QNUKLhwGwV1uqpCGjza1dAPvVqrp1wfpA2oc6ZT5rhGoPdSd5Uys1nAczxxhM7",
  "key31": "31F7xZ3sUdhHJwxLSKPZBNn3bGLtaz2EhdnLnMTaUHeZ2jPdbCAwAP2iMdrujB8VneEbjZUaiUi61PHTdWpGF5a1",
  "key32": "4rn9RBqjoNLUkYqWkwzXnrh8z15iQpc23k1nyCh6roNFbnTMk5CjmcCHK1MohuNxvjC2rF64xoFzHGS7s8sRLRrz",
  "key33": "DHjT5fgHjXK5dTj2o9nbN5WDReVFraGCcBkY2a7zzs3HJUS7hgL2pV8E8cNESUEowiWeZNCPxhNVYNxBFjqNAc1",
  "key34": "3zUFCK2mLpLaUG4zX2rC7gPeVur3jd54di15cNC2ekaGiQYFav4vwQEQVQ4PUDFMeXAS5uV99JhCcTeCvBUyYV9e",
  "key35": "4tJRadfTRv8iqMsz2DV3cE2ugu3LM1Co4aZhPoA7As7kkESmC4gtNWncrikfsPupo4HPTJ3DeBZNoqiCxmop9SW2",
  "key36": "2P5w21CmBmB4krhk7oSt5EounMFFBG7YMUv3haGdadLA4yDkpy26x9xn2sv3XFNZkSUoV9Pyt5QPxXLxw3A3JRkn",
  "key37": "2hwJsbmDypsK7XKLy2BQ7747RdoUhmu5oNpqyE8CJTCeoeNy6gcZt4CsisNXFgVKnZWYDggLxM9NyLW9y4TRtt72",
  "key38": "5fCdWG7J9GdqrA8yrop65kHW1MzMfgyD9xMps9s2k1gwiXSDYMERBuG2TC8vJxhZBLH4ukHRLaE3XXSGpEuKSHkH",
  "key39": "2XY7WCgDfx3FumgtSBwosvyciZo1PWcPxS9RCKbh5ZLR4f6jcuzYtAzTdZi1zrMHBPZS5q6TEhqw7CoghR6JZdtb",
  "key40": "2c4CbngrLMZFRshTJ4uqcAvpwHunv9Mj2rT1seGK35UMkYLJBX5P1C4sgv6iVoizp5bZEnTYriYaZMs3rCdSei6c",
  "key41": "4qz7Uhsv2dBzRmbv2bqfd4t5urcPkA8ffWdb9qHJqivUqrQMeZP3bAcPi1L3pifb7APhps1FCNEFssEy113Fu2PW",
  "key42": "3WvTdLh4gHuNotbkXGJEDTUxTqKVdGAE5bFCogiNDZpTNfdHffMHs7uqJm1c6Nd8EGHyQqqddDEr5iUGSqihQMWU",
  "key43": "4ZhA8W4UDJgHYFYLuSWofMD562RroxwhwYJmrGfSNbZqrGPSHHQ6v7C6ayvbSnwEBScZF7NaPphnAYuoFK9ZxFr8",
  "key44": "14QjBipKFXcJjWC8X5tRy98L1vWtNFY8GMCqW3RnxH6DKegnhbr9FXSBYsMnNh5dN8Cafb7ewdZmEdnuHFdNEkz",
  "key45": "PBFFaeN5RSaQtZztx45p67fnyB1UPpvo96vPxduonsMFV4raW8pApfCbYxARPJqrue8FPFNVTY4bxZHYY1yDjvC",
  "key46": "4iTFWZ8y8PdSYVKuD6oqSqZFJgjUdq5vdYa5se5KxQASPcq1Ghq1JBicg9eoUaN6tgMbfcUjX9MAWV9RPBbPWYBo",
  "key47": "2AGLDEZa18QXz5cHef98ttL9LLE71KGYGQGHBPCKRLyd8h7hgFvdYMmmnQnGZpe1tF42RGjJFdttE9nhgGgpz4d3",
  "key48": "AZ6VLyPTas12saawcJp6oc49japtQ3u8Y47Tuy3mmBpu2y7BBZ9JawHh1Ptx9tihjhfJX4EEVzrq4yZteLggSUZ",
  "key49": "HZDJDFkNUCrizrJ8hy7t58wwF4XU4qV4FXycMvQYi6W6VxGcb9fZUFnentq2rwFTiYgdXLRcydAoF4UWaDqkGZb"
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
