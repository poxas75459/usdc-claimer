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
    "4CC2VSEmhHGuEuUKq4r2Y8hNQSQk2w7ay8KLSUb82Cvc8ZEEUWTSmfpCM2VSMxqwkqHRYNa1LVMS2k25cLpTw68K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LNGTijuSTHBzyQKW6ymVvm8BXRYtdWTKJFBmmc1LtMU3G1qpVNk8dQoaRbScTGZBC5hWzzw7paMbf3WunCqwMo",
  "key1": "j5gAjXwUNun3ZyTZ1vdkMETJCfecCBenZgLTDVpAmK3kB87Uoz1nAoEiqb6RzbEuEJLKKWxtonS1sL8mfTxyMeS",
  "key2": "3VBm9fpj4haHY92u7JpmMmBqEc86W6fF8C4Ytqu2HqiDVnzWoqp5C26YGvzKCdwB4N8VPcaS36LPVoCYnbm4QHQi",
  "key3": "5KY8yxmSjroaW1rLZvU6WUCSnq9zGmdaaqjjnhn3PZyYpxDPVB49wXXSotfJ1g4fwcxgWsyFHPs3DXmKRty31GT5",
  "key4": "bFZPxk3ZvL6L7C6QDQS1juiPwBxgX6BsPnUdzzCWbXJEoK1g6FVhXgaif3TMrZ5oKMhzw742WYSCBpjoK1KzVJc",
  "key5": "iPGxa8r5kHVDcXzDcTuinWSLVDJhFmE8AFS4Qq2ppeupPZumS4JdSzSDDZGu5BV7BspxoNw7hUjTLMxjuCD3TV5",
  "key6": "5UQzHrwHbgdz1NxAvqErr4MYD6AXPhGEQT5LQ8EeLBWKtUXk2NXQx5TQyGUkviRHo4gynf8sYfkxYBzttSzwrwi1",
  "key7": "2JdHSZSbeDyxRfJhDr99RNCAfRQCf7eD6DAbhzmP5Fp9uzz5GQebC8QsF77Fatg3Woh2aaenmwCMuihpfLpGmnUb",
  "key8": "vDxqRMnRt1XUVUZZR9LmKeoSVd4goxsMgG12eG4R7ENShWoLnxyCpx4kCUfrGN2jSLAt8LRdKFP7Rdk3kgH95Eo",
  "key9": "129fHrQRZoAFczV7KEnvQtXVnXZmy4LygYCUKkTkr4W17D7BxtYiAt2Z4CEGmGYPqbyHQ6Jp7WJJgqoJsYmLruV5",
  "key10": "wQZfEC3UFkWNjaqDvnakEfZELcPphPZMypRRP8Viq5wAY3kxi1p7SzTkpp6YM9wJ3y8L9AB8PS7Jig1oAiPjXXK",
  "key11": "teDMQM6x9AHp4Lq3yXRx4YdtAu8SRbrptuQ6KCN5VWwMrxhvboHXdgCMACCtnCbhAspCGhJrBVsrvdPPHCABFch",
  "key12": "X982ekFJgaCfQB62aG2ZPFGwYKFY2Yxmpd4nResYP2ZvuES9hZdSYdVz7NuxcF4mEk6UtHt9bqyaTyBNgyPZz5c",
  "key13": "3S3tR2rbva8RvKfktUGMxmDotCNmWULQchYjUJzzqa99iW5kn6RmqQ8DDJZaQzA1yo3QzV4qP9pESWLrPrGA39hD",
  "key14": "4hdKXxq7WaeRVQypAKpHagLTt1yH4mA9oNocTVZpCYR8mqT4AVQg3mKBCtQ6CmQDqcQYwe6q2mSMF8mSegeuaqUr",
  "key15": "2kQEf8Srj1AwZuA4Ku7ma6GGdNhHp8pxKQv3fvUWEyobQDpdkM56HygLLi1wGvhPxAmHb6rVEM2s2RbTAhUJYH1S",
  "key16": "5esSd7CYnPnUzuPnr14SMzMhJ5p2MCK872ukcWeNFdv7MVUbx7nA8R4q2neP61fFGXqdu63WuvNJLRoL9ijQYVsg",
  "key17": "5qNVRybhHTN7391Kw57awJMewpHNDjkqjMhKB54k9jedekbSnoU8j2fCoXXiAQ8ASGmMRCHMqnmGVu7Je7fLaBCp",
  "key18": "2UK2PvviHnCo9JRaWzuoeBi3kdNy8PMYBoJPWHZ57h3D5SXFrmSfrL7Z2eDtpMCRbVHp2WEHcM5AsYgjcSxCS2QZ",
  "key19": "2cLfKa4kmjPqizMqAEdz1QrnFXLCTvE3MyHi4J8VZtbC84DaGxZSUyVttDL73W5LJBbWjPaMUkoYcqN12pFGTX17",
  "key20": "5fvGnDYxw1C5A5ztKCiM62iBchn6vhK8WicGQExQswXXioxs4W6j2UMqdJuj1brWXixPpX3mn1wEqhRSBiB6vevt",
  "key21": "2xGArbBWpPk9PGkCHFV5AyHDG4t31Ezqz2QCS3C7GqCaBqEDgadLSmtgSoCMMR2GZUovwrmaHXb43VGrLoXtC6Dv",
  "key22": "5h13MJ7NPY4Grj6sua9ypYnBZQERk2coECmwVrPukS64DaSYM5U74mLrcj1p4QjF9DdzgdQjYLsJw6WXAph1Xtx9",
  "key23": "4oyEkB5XRt4Cw9tyn3HLmQngNUutdmZDcBggybBu2534dEX7nHEBTP95U5kuzjRx5RuQcJuuyUvbvjiKsxLqjdwq",
  "key24": "4WGnGJ1xwLFDsiPEWB8YP9cRjUgv7EAkQvDCwYVAyD3PKHiTNnMxXF3zum5bTK7QgD4PMEkBwkux9MeoCN2F4c73",
  "key25": "5RZpZZDQz42Xo978ZCZz9HzQE1PJSD99ZorF2fhwqBWRUqwcpBFGH1a1vA67YYJHyCUQT5E6J5ceNo66tDd9P7DJ",
  "key26": "4eVGAkJg9oJV3StMyvJTrZgapBxFLN2pdKnZ1DqVeih8qywr5pyDXppqEhUH1cG86HZnY6gMsvD4FsaA8QQD4EaK",
  "key27": "DBLYWcQTc9k8ujqVNfoeRq8h3hp87HWMe4Sxhn96UrMwJW5SSQBxCRdEqUF4uK8K87UcftuRNoVdqvN2Qvo28Yx",
  "key28": "5pnmueoesCMY52FpYiL2Zg4Bxt85Wz5HeXnQDGovGtAyvAFoXMpLzrzGasve9PXNphEVZpwS7Zmcp1VftKV6DmTg",
  "key29": "vLUduNxESjvAQv9PGidHEH8HUqC2mQvUVSFAVzX9zEwSRg81d2byNoJaQhq4k1rwaqGgz8m7NBuXyLEozQb1KHk",
  "key30": "2n8fajQ4DCMCivJmQvoJkowhAM2Z3vzyny7Q9MPNfVnSCm8VwixQubRay3Ni2PHWSXDiHUPCGZqBA3pG2gnoq47",
  "key31": "2D6NvX8HGQcEL5e2WVujyJk8RgzfdyBfr71BojyrAx3nsaWS2s6cjkQbQGCE3HhFdreC3ffc3C9ccx6kGD1zsy36",
  "key32": "38Z5VvHRGKfYzRL1tbL4LPCWZBFZrHvp3Rowmrm6s9CAQ9k7KwADzajWxzSC5vZtbxGVpfQGJdZbeWkTqENWoBXB",
  "key33": "5ZAJW8PRSabWJwEwVg1MQjvcHXhLszScNQYqWrjLysc85M2o34wSLshsAYiyx4Zr2svkRpxsoCM5Sy2EszaGuLZp",
  "key34": "jMoe3hx8tRj2uobCYbhZpsxKN7mnWEnYdfowiysWT1w65k6z8sVNC8mL2LPfhvJEDhQXjjgkeTpn6WkWPWNoTmN",
  "key35": "3ji13TMmCuJNXGQs3my5mXSVMSrZxDpab8bJshWB5s3dAZKEJCan5sJRWiVNwTKiDid64Qp2K68od7FTNo9ppAzT",
  "key36": "3TuNwaWQoYPop4wbGZu2tjegNKF5nqR5JvHKyPcA2vRwMarFjzXtyT3C57UQtHSn3CtYKXyFYQ2sCeENcXrZiQn8",
  "key37": "3rsvERJTtNFaeuL1V3zDgkVVi8ufZuMAQnybQ76rPE3YdcecxFwiRrAwsL1ght9CJu5kFwGtse78cm2QMmFVP7ck",
  "key38": "zAj2VhKCFNaVcjYtKKokQ8GgNCFerazwoRAgrKg3cufeGc1GBmSpVttMh594j2wGepug7vrJqjm2bDUBRcyPM9S",
  "key39": "5fBj3eizMLwg1ZQcBStNZELAcDoYRygNX4RHU1MnuYYHcufnhEHYwBCuMqwG3cxpmDoD3WXg8dMTuoUydgMNhYAc",
  "key40": "tzvBn8LCiB1PT1CWptzMufHZhPH2Zei2AV9SSyvCxS4JvnW1eo2debj9zrTnsyh8AUV5heY4rNxM7YrPK1zeopf",
  "key41": "2agpBvhQAk5ZAr3VFsoYvfkW7Th3jFfhKydGmEBc8WQZxmuop2Ftj4sDj5Unvwtj4LdgmawzrA34vr3uDf2DND82",
  "key42": "4MWNSgpkWV4NPzygxS5tHKeiqhJYNBJpPKcWRY7HECwzfUc5DuiPButCnCeU938DaewBcpRK99uzwUrLj169cat7",
  "key43": "3YyouNugtxhVHAKDqiSeEoqQpdazhuT3nciEh8tbnZg1wbKP6RnZtKPZqg2ktteymwTqsDNCCRF375bivKDvyEHq",
  "key44": "MtsWzDAsqbufmwUhX1HhgpdHG6YaL5Pw2f2qptBNxRu1jskuTqqw3944gxBQt5Jy1EVfdBvLB9bEVrpXQBD2NDq"
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
