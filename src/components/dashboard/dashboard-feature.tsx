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
    "Kvmucazts77DJRogQCyVcct1UXH8sSbraCYuYe38NtyaVMqHXjs8ptGCbtQPcZApb5Gq3HLvkEXszXjkkcBVbUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYRe3aUsc4UchpCsX7cT7oyXTwQXHqk3G2Bs9eFdDdN4dYG1Xjh2gq79hU5MEJFmKoxjFt2hG9cr4ZFKtYacdvX",
  "key1": "3eQRSDJ1Sw26nF7QFZQbyumaDjexZC5g7KDY4SN4AUoRHMcPnwAe2bo5ds2bwziHeBE4LaJz76e32WAy3HhBvs3X",
  "key2": "2Mby25mG4AnTVgqfScRT8FCswSLBi5y2HtCd6wE9dW6pcWx9WGoBXHMGnRZnsqA1WiweUmthpnEQpZ96eaz6BN73",
  "key3": "39Y649w2T4aTkPS34ze53SZMvREGAgy6nK9tKMe54LwSrPiGfpMzNvFqDD4JvtNbUNzbJfV73zh3wvap48WK8qfr",
  "key4": "5tVYPvwJU6gWN8BPtHDBue8faCHPvfHspXctppW8R4R89mR3YRVzmvpRvwDtnfiSAqXJuUouoCJJPNAKcpqdptG5",
  "key5": "3sBxrQnzu74JzX7FWyCG5PuvHdrX8bGEnEhYSoJHASn9b3aZGkCTfYoDP6V5vfraHGXyRmAWCY7nCweFPdx9VF5t",
  "key6": "5bEP6XYM4xKN2UA5fwMXm7WKAqqP473sCMh9z8iuGHDRcKSFwBUp7EpngqSDUWxfLaWAokWDHBa77atWoVPZzbQq",
  "key7": "2FCNEffuBtEPWdKMFTgKAzBSFYYJ6FiJY8kBUL1dM5nRDoEesYPtkfYhDoKMGDF9CYYV58VZ7evW297mCzd9HNfz",
  "key8": "2fgnyDa7h8TCgTbrgTk6XFPRwQR4PvK3LpSkdJcebiH49hY5iWCNQk36ChpXFGzy4i5MwUJXB1koXCf9bqndGHcE",
  "key9": "2mMyjYyBCUi6eJM9PoXmWRkhHcB5XiEPi97sL7WF3zUAJq3v7Y8eCSKoDewqTGeH6odtTyDSHCaAPVAqybwNpvCf",
  "key10": "5H2F1jtxp7sWSksaFUuuN4zzGD7LnUDSV4EATwiQd6jrwFiju6GvDsCMFX9notQr7Ch5CLV14uEG6evJ5nKN9cjE",
  "key11": "3Lnr6uRhA2H2p7nTtfDsSFX14idHDFddMJa1LZP8E1ojqNL2rEYnU1hLM5ARnuDV3HfnWYJR2b69JY2m4TECLKnh",
  "key12": "2hdkQAS4wLyzqCvSTXHFX2HBc2hiKJCxTgvVCqawQ6TQ15s89CttgBE6iQfRQBLDJUs9Kp972srMTsafiqke9F38",
  "key13": "5oESFVSaZMa82aRiYA7PKV8jwjFdqVe35yJharop3kmwoPgsUw2b25AJCPrgNjpnWNR3AgHRJHa88WwAmeayc6P",
  "key14": "gwTy1KTe32A2ceNmcTgFEnGb3RR3uFCQVNpNvNs9ht82nwpGW9KPaLbPFS3hGnFSzUT6hvYCswz76QZ5Mnq34Q9",
  "key15": "399EBBiLLQF6JgdWMFE3uT85SdjKTb5Szidkrt4Wqb83G2ezc75q2dZoBRKFKPgTR1pcwkxy8xfsa2xwwooDHXKR",
  "key16": "4wVw4seiFL6P8FVyanGJr4jJ1frEkYwynogiNgtRSuKdPBrC3kbzadF6AY4vbFF7QAX4Too5w1y9fe6DN6metAwc",
  "key17": "3xohRYCvcD5Lztsz3aidFEU6gEmWhzJehBtXBtgcmQWah7Sf3uxdKyo3cHfAUNmmXBi6c7r6raFzUm3qSeQo2bZz",
  "key18": "LAtmziRusuZPXAtBACSGcuey1ufpLQW666hyEirfGDFP6oghyMpVHotNixr69zVbKckomMndysSTHzPCbbKbVeU",
  "key19": "fMvZLmaNMT46ni7JjefYU281Q4M4frESmRTTg5mcspTrxfRitC8ukmo8aunjmRrJ4aomy1k33FFrQBbuGtBHDKu",
  "key20": "2yUtymUGwTEfzcan7KTUgeQFYXzpSCQPvrGoqeEejv4TcSs1jLVz2271rHJt7pEN7REgCc1tSVbNupBWHPDZJLkT",
  "key21": "oUqEouxwBDiEkPDSXhQog1WX8DCtUE1hpRXxgTdDjpnERshtPsC2weJa5d5MQpyZ3XdQ4pH8JkDPVgax6m1MFVR",
  "key22": "4Zp6Kh3KxnBKYuRvGtdpZTgdPi9Ks1SjgrnTKowivhFSg2wc9xFLkzhktpGkpGAnPrwAdBHN8puQAi1pNBKasyQY",
  "key23": "4UHFBViRGUfy1fviUmu3jRuGjtaP8gvhzpUiX7TW97XuWpnAHcnoEHpJoJZ9v6mRkb1qgn4sdpFiQHGk7NCtXwHm",
  "key24": "2Haeu2JL1VxTeKsbCTTf9jWF5NPzVr8x5MU6zpMX8TkWe1vvVh7Mowehu2UNS6VDmgGq1iKjR5GUVLmhtDCdTeoJ",
  "key25": "2rNFtJn69SjJs6sWhmoXGTtC3Yx7DM6YVn7vSZeVw5d3BAEUrHH8A4y3JjrvMpSEJvhza8TV7J1zRcrEjN39yzZC",
  "key26": "3aqMb2wNgrKRZ6bt7rZst1goSvT1QaX4UvUDi7nxpgKwPCu3xTkuJJTyLuFZDzB9mb6tKYGpccyDVoFJ5vEvdVhc",
  "key27": "443DqnoPJAhCjr2oky74MaCz2CHW4QdJnWUts9noxt4Wko5TANRMsS3pUjZJikacHFyUriygF5mrt3sM3RAnPzzQ",
  "key28": "2LgXZCHhP8QgSWfE3GKGjtGoTzrn2LQ9Ki4BXKNAkhkM7GHFUv3qo7UZRWfhCDByBLmxmVGKY69T1iARUm4xFwdj",
  "key29": "2siQMDx6ipZAX1aN4NMN46B5xGSLfUHt52zAYT9H9JQHm6sNe3TuCku6HSbRzFu1XPgDDhQFCgRRHu85USgi3QBt",
  "key30": "5NmGSDQWS4uD7JLrMVLiXkDSZRS2pa3A5tcNa6x6wyxJb5oUzji3JdjGkS7zqn3J8wGeHjxbi48j6PmgwrYwakFn",
  "key31": "5xuTHnFGrWyX5Hng2Bw5xCe4yLs75poWioNECRZQDb2sLQLv6JFBwYqzXYJZJrC2AGREAAFKbKL6732rTjnm44Tx",
  "key32": "A5bSJEHDWW6g3sRZfqCCo63L5EaxVHNpUY9cj5183NTj4WiQ8tmpcrMap8EVZhaRNv5ajuB8Ry49qqjnudbK9JH",
  "key33": "5hWAWFnvS9pCvg4tU5ZPx6rsy8DzJfjDuzCJrBZNiGqdBR6erdFNM6niwcSbccVHoHUXZwRgg4SjreiKaS3CXWNV",
  "key34": "3F3rw49Zid23xEPEqaG2uzfMg7ke1DGJUPAjrJNEeZFDwPic73MECfBeEoN8dyJ2nCgtzroXpdtaFgj7cr3wEAaE",
  "key35": "5LbwaSDBwz2LVtCEmhKJXE15o3zHnA5F6FVpqHSF6UjhjQupxrEU34k6pHgaw1rpWZSk6BfhbJCtAtjxNo4kAhdY",
  "key36": "PXH3beoGnMHWmvNXr9QhqWvW3eR7Dv2MdVTtr5gd7sR564L4qGgKNGEmRPMHJx7KAwkvJ6wAoGJTMirgtQUibng",
  "key37": "RGKRsvKFxrA1sb9euKq6d7zjrPWhRpijoFkcyqvjKe81C5z6Q7CeWotgbSFKAxtCiwpzL1FxGazNPDo8TYytWeM",
  "key38": "4sJ1BCrjazkzzmdPMNLCHgTTaPr6tSuCiuJ1Zx5rSMWF4qs3hpsMDbGGGLJftHsiLVd8KMBHdzTVQ29YWKieCUP6",
  "key39": "qxrGoAEPCiWCU8kbPdsnTrhRreDqSw4PqJqUUzbKeQNo1A3ttgvsZd1YUNPP8aZtrtWC8r59pV3dMfhcpWBXi6d",
  "key40": "mxg3AkUmF16UevfNAapgCnq8yX1ChRPSafqiiTQfhsnUzNMpFTg2xLxRyKeDr2QT6M51v4dhLyteW9p4Qfu9C9j",
  "key41": "6148Acoi5TVfUTQU2LtkxrzFXfdRcYYkU3XTTqb1N8MyZstGfozeNPM4vbRCe3JURt37pkHjJ4KLAuWhBMJFbeKH",
  "key42": "5ZBRikgAb1GpMwCvw7wnGQTRW61UpJ7NXRUa2STh6pwHYqi2ekEmLaV56CeXF3TGnwzU1qNrvBgUdtdqsV3mr24j",
  "key43": "5X2Ar35nMkg3nuf11P39Zz7geCQjcS49qaLHKA4YYXRhVyDYYdWdSiHAdE3cQ79Jz3nJ6ETFdESQL9asuEsXLNow",
  "key44": "4atjt6H1NLGGy1mX9Ma9s1Nvx6hNmZzUVnE5ogEidUcfFXXrvSsuBSmxYJz3c2TmR6JDTtJdbA5c3sSqkZDd1tUv",
  "key45": "46KHAViBpStuCHYbSrdkhCxYddenTrzrdhMo7kE8jxXPptfQPVgbnRQ3wthDcJz49mXjeQ3W9hXJdXaAF6pe7GGa",
  "key46": "4owmsU2jNnGMTmnhf4dnvjMJSAL7oT6adbPXGju51bUQxHotaLPijW1sQePXMsLcVymyCzqn4jcNnCYox1cmg97Y",
  "key47": "3zPW9NWJcK8dRjBT341Y14GRxRRPgSwbgBBLdheWy7pPthwVcAvLCiowZDM8E5TP3enbUHKo68R7YM3Yk1NbBMTg"
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
