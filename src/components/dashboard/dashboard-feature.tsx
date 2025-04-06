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
    "3kCKAqnSzYgPsYktvqLom4ZqrgvsxoSftHUmvTtQqdafAKnS8uvALCE9Srn7Sa4cMTZ6AfM1qhpustPtGcEjgLRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9RVAJFEr47BSD2ZP1KuZwZKF9UDFTLpQQopygAKcWEKwMEiBYrTjD5mUnj3nTnpLHJLRx39F6Si3SpMZjgm7epi",
  "key1": "JTbb4gtpcExHr7EFweeVdwDWz32qePbDoYtwWR1a8mTRAfwJJUDub5gPt7CmkvtwD32HQQsK7cyBBLA9iraSBf1",
  "key2": "5wUmoTCDM6kKQ3sPcXXB84hzfpyp9YD5t6LGjRYUa9thoGyx4WQAviEtHQzaNZYByup45sW61tzg2Xtn4jBnWVRA",
  "key3": "47B1xDxYy4mzcGgbrUzn81oupG55LeaHPcDocwUMMWeuYoa2RqjX3BTLTHwstViPkQ7yRjJn3UsBc9ccqnvbgLfw",
  "key4": "2tBKeWQgVowUpPimMwAB2TBVd9PQXZVKffNhTiNv8C3KzLC9cHcdeqLSBCYJiYKLQSNXRuvkoqr1LNbd9AhmpuxA",
  "key5": "5speKRgVPL1zgdsEMknt9K8NmZ1ATAcikYmJ8FQjgbNM7XSQC1a9Aos1weqEZjr1CSCjDD73pghVPAhyg27RAi53",
  "key6": "2T2Mu2k6guP4JG5Sxt5bdN7hTqjeeJe7tCb3F6Mqeo3b8X96tctD2MZSrCQwp2GpJZXv5ASG5DWMWKv6tP8cbShH",
  "key7": "3NgfmQibT2DASBJxWjsFiuHtMj742kztbFECLDa3kswRSD8KFDRVAs8SW67fWNAehdKB8F8M42PZCzRvanP9AaLA",
  "key8": "xin1S3J7q6cSJ8xZajMbVC9N5AhjdjZUAeeXssL9Hj572KbFqLqK2ewAvAe4asViYL4JWZ1mRaHhJbtCK55LevD",
  "key9": "3kmub8ww9KiQ1CiEWdqndJnWXkaqY7pkW5sooGgt3mRk3DhDwBMJFQmdg6zZbMozTJvWf1vfFp64DRzMqJxXGK6y",
  "key10": "3ycuYFHmcu2yJwfwW3iUZiMnkQ5yP4mzW8mBAHfpxBzA4D2pmQWnR7guH9DYhQ1QDQy4cNFni8RQdtC7JHaFgBBM",
  "key11": "j1tZAHPZs8stFn1TA7ydLCruammsCAE6XYPaopsrzvKcjPtBGX29DpWiGZA6meTxNLKSgyu8NuKZ2sJA3xbxNSe",
  "key12": "7JFGKm5wC55GRThsgpuKPDE8k6kvENDpj8Fwna3hRnSSGTsAziHnwc8Bu7fCmSG52ECFxmUzJenC3i4qb9nycLu",
  "key13": "5YpYPwrPvu8pdqtR9UAALnEqX5yf2xNwcBM69P3V6MgYcSEig2ng92ZqBrc2WmnbpbRTLbrHQFPE5usX3jLDDof9",
  "key14": "8nm7CGno9S1TZcVhyo2Epgh8R9dki1RbUrCgUMieraCh1BY1pyh71hWCzUkdueBtQuQQvFwAMwacL9W2yxMWZAf",
  "key15": "wZ7kELkYM6a62U3BebY1329ZN71TUHyV894xwfYM5GtkMDxrYRbF7n77XKkAnVDgEKaQ4yLdDn7YR1mHpio5h7S",
  "key16": "5msesgPoaqzjQuTkYQukbdZQjSgQAGBHeTXGARokLDKBuv9RQu844GkWoherL9FCNCN4cGJe16SfT8XHjzkgnK4e",
  "key17": "274EMvq2Z8QC4gsMT4L1PZ52p7kKg7wNUoNrk77b57EEFkhsoAZNWxJjHVrE5NJLdFeNW5YHshu4NLg63NjQwH5u",
  "key18": "2SA8Qfs7UyjGaoLJnCtFuZ8MoDhit6C85b6RgVBWNv6zraMsSSsB5CVJoqAf23qF9g3UTshoToDh5pAA5XAEsqT6",
  "key19": "5d6Y8WX2hMochWXkYUphANzHda4vjSgBFt4JYurqWFNn2oadbVoJruSC3ApJv7fP7HCCqJRTbhKqpv7GJB3VfXaF",
  "key20": "73ryE79M9zYdggqX7rK2oVft8cBLyKi9wPpF6AN77dXHhpQDopnUXt9SREVTjAR1pHzJZdzzL9eQwxT4yvaq6gy",
  "key21": "4KFMmUyLBr93GnD1ZZ94fj3XCcWDpzxfMSR2oAWDQ1LaMar4c8ZnRgRsiVQxxA2cf2yR2oGSYfV6awSuMXKBoXVM",
  "key22": "2CW35zbrPvAytix8p6rD4FH25MTXuTiSACiGC5H44y8Zet7UL6Nb2rot4C2eLtrxfWuzzb2dgRGDtk5pPbSJ8LV1",
  "key23": "bLsfASLje57sQawLR16QLncYz8a5P2eTBoEHtk2LEz5reSW7U4EsiXQJigHVm1k7UkNay46xathzezyidn2s6M2",
  "key24": "2sGuFcymcKHvAfWbvXWxngJT8RKWSDQoV1htcC21GvPhuj3y3zEwsEC2mxDF481cX5Zk8Zim45mhAR2WzKKptwtb",
  "key25": "hEpBv1HUwy2odNhcgfXqD48ZURdU1bVnkwMB27vXewJgW6C9fzzMmiDan6EoYF8ozf8KYr63tzjZWLRjLEsjtvG",
  "key26": "4ShcfcPZ9YfMK7cMcxZVRBrp8yh2p8wdZrAig9MhjQogoKKrpFpbaDfNSSPaUPM5x4SYC8fX2d1xdWerUfo3BjyU",
  "key27": "GKLU6zrmjQDwPm9bYVuqXCB3hd8usV1SgstTD9ndDT4gffFdYtXXBBiLSyirApgxgXfxCrLVqJ4hjvZEfAenn1i",
  "key28": "4GLotoqg9UE1gSC6aagrNQpjKWo59Zum4YU61MGqfQRKiWkWKrvcKsubVbkpksQidNUHVsgu1aE27jjU6BkTLyzk",
  "key29": "2BmyKniGkPTCZRpFwvs3v9grAWozauafZTp1QcuxhfJoRk9knTuErFaHTeQ1QFWhhqXb2xKQssyrECFSYNoVsgLB",
  "key30": "4BNUGNYogvSmK7zGbnnNXJyGnM5vgYwk1Zfyu3gNoJGeu122A8qUSyhFSNYQnEFmZYhsWSv518pEJWCDpzGD8ft3",
  "key31": "2XSsxA3xhdtBRMRMpVnhCRFeT3sCuL8CBsYSfWmBztW6sCAdfjwSGcM5ZV1EJzodLhi95kCmr3xUYJQEhNBkNQhD",
  "key32": "2UxoLfvcWd2E9unrXHejnHsbQqNQWbqbjEoGMtuskWHribb8zdwzqj67zgomJ8v74ehZSd2vyth2a3tGt4be5iCL",
  "key33": "3wAYY5Q56wpHu4Z6XswT9LjEd9gSqvVLnMv7tJ5pfteqFtaCBjd4CevGFuzxz6Fy7UCjZErG5WyWMZDDG7hRCLHc",
  "key34": "2Vh6yAKzXG9qmHoUvDaSDMfXt5cELPSnqRvGvgBjkPWsFeYEmiXbkfPGiSjsyvwb9ZemBAxbkKPgk2ht4MGF8s53",
  "key35": "34ghXCYiE1fx8u5ZS24RynKqqHMuGdXSZDqkgwuwvtGNzbwchsist5Bndt3tBL3tDudrhrbotJVPj6worrQ7e2qn",
  "key36": "67C1Gnt8tkjHY4J44myKPQszQHc6kqSyvHrSxoeNoDm9oTmUpGk9kx7uHP8EMUjKtjUPq4dATWB34qUBxuoky8bp",
  "key37": "48v2kmBFG8A4mddLz1jrG6vRyK6HgzJkCdixybHowDdoTSs2EW1vvPshck4NBkj94VPJfBDv8ZFXJR5v83vZKF7D",
  "key38": "3UGvJaUiUsTyqjpL9Rf8QNGzfxdGxLyP31PBe7MPhqFHf5qe3wtLt9QHeRp5y5H52uqoAPZaLv2QUMs4TDesS2c1",
  "key39": "2NtV2J5qau4mR21zxfASoFkQeSBUdnh2owoHXpoahH9jhxqK5FLBiE6pxdm4njn35vUjpAujKJ16iCBGcFjVzLSv",
  "key40": "4zXYxus4WtLwFjtYoPSRdg5DzczfbH3zwkqjnnS4LQGGtPx3br565QGHgver2FGo4PgmZgVpc8gzvChnpH1jk2Ae",
  "key41": "39WuDzzRqsTz8TPtvkrWRy2c9SQnbXEuX3bQHz8bqEEYfLFP8p4zay46YP83EAsT34N93V8rToqy1Q1bcivW525E",
  "key42": "v8qpDSoPrD4wYKLGKy6DxP7cZRkJduj9d3uq61pKC2NhgLp3oSCAfQ8Xvk5ozQPxMvrVD3e7yB24v7wbajTZVLr",
  "key43": "25dgHfN8J4tyRPzUttAzvJf62XzehsvLZMJ8kKXWMDNEjKUyrRHuXsTy4EXuXnEuuiEAdb6Dxv6EK9AEQNy4ii9Q",
  "key44": "3rf7vpBCXfr9Sqwi2KmP2sR6Y6BttgKP7CuX5Dsh71a3mxMZDZGrYNYVinehGm7Byy747ghWtVqfeWATfSaFzAtz",
  "key45": "ZBRjDrmvPS3H4S6gz2684R985DaCF1JKmAY7U9cWGiYuLxWsnP6Y2hEuXqDgZswcYzThJcAWNHqrqS6btj1ryHu",
  "key46": "3rjUAVjbqYNmfV9gd2i3yZgyXBPiuepo6GmwkkqUjLHw3YArtKFJDUGbkwdN1wDNL5XCEJefhpGq121mJ8eyd9DT"
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
