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
    "28SSU4duS9DS6a94br2UtYAqfsgpXn8m57MDGqaHzFYyvY9nZEtgur4x7U5kxhHA2ow6EbFvbwkX8iE5GEtBxqwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NpMGsLai5o4obu3RHAnc9mJsaeomgkjfcr6A8S1m5Ej3Z3HC7wmRUZ7EcZuvsa1Z64q6CFXyXdxzdfsDPBBbkM4",
  "key1": "3D48Mv6szYgYV8aKVd4ZZKRMGzycoMAwK5bB2AtQ2P2EtJ4PRWjtDUaTZkZBDCoTNmFgjeGVgFuWdeesBB9YKjk",
  "key2": "4VZ6XH1ktTYHoTanUknu1aVCh9iFdbCws1aMeVzANwyMbdPQbkqaGyZHRNWJMX1QMtg7kHgg81Sab2ruArCaAg6v",
  "key3": "256VnXHJYmZRsMD7bMs96WGkyieuaQESf4HidKJMFSMzuKfshSZbgsrVvTbUQBPszxsEAE3yTrhwTHjdPNvB77Yv",
  "key4": "57fmJHUD94tq41ZhZbvdQv9DSNZvN6YEseiLVa469nCMrfPFSdDJALHH2rybZHGmhPzithfBN7bEZR9yxxajbSLw",
  "key5": "qnsm8ZsQN4P9umTQevoFS6zCBdBNq7gxAFZyFrMNSeNLu4aNke42Dbk4LFZEH9bHvGnNzhpSbYddVGqo6E76dKz",
  "key6": "B8KUa7dytxtFLzQ49LfRiGECK2qAoKMnem4ddXGmmU7HKak374x1HnGQQ3bdhRWCMjasxqpXwQy7bXiwcMd8gZm",
  "key7": "662a6iRSib6jQV36Q5WiCksqmAQGkXnCbHnxZJaiTcPWiBP5WkqYPGwXH1FGk8xTtwe9PpM1kPAZ2YGKUFse9A8V",
  "key8": "5bbJWcoC26TaoAGGG85eDnMt1hzgeYMMWx6Bvh18AEzeVfTK4RgRGD7HZWwfe58gMnZ7UuJBotU6WJvHQAd756uv",
  "key9": "DGqeZaZ68z7MZHFr8y6PVuA7J86rYKSKi4feVyg499CFgT1mtoBs4XNsmZbYh1rHzrZ6QXTm9C9Cx2re56vb6ZP",
  "key10": "4u4hN6uM1DCRE5ce1qL647kqS1Yw3EZ8WpsCvQ7YrYhtfpUFizV4KCJpiLU2mYkGVSgnK26LjzZzrEoGMTg9Qo8A",
  "key11": "4Uppic9Bjpk2zC8oaLsJZP88GgimDbUY3L8YExTN1wHWH3uigyM9BnGwgWAN2eVtcr33LXFdUT6ncui8wvWkjyEA",
  "key12": "aUTZtgVUBzkJn2SZ52Kdzn9B5cV1o4JAaZcxNPSQRk3WhSrsxKpgTBNzPh4YZ6QuXi2ZyFJ8kuya3UgXbYriACr",
  "key13": "57zrVgYdw7EFQGAphSJ3NwQ1uZ6hzExojRCd7QjGfE9xJGjMwTqbLDquEdxB4rw6WFEg3HzPrcDsp2QEM3vRYfk8",
  "key14": "5M982i4kyGokF73Xy7tNVxYAWRDVQJPHDP19xV39tuHj8mVoR1Fq23ZZ6Dc99vFCqqqrgbJzySLBHkfhD8hKGrRp",
  "key15": "xBCbsyLt4SXNb1HfdWtNUw5CjAK8N1tAyYkAM8P5c8qZ5iMYMooGWN5RP2C1chgb24Szp8rffZi7YUBP8yxwNLK",
  "key16": "2vyzysnUPxy2ZA4sG6FSF5shMa4eCMU59WN7C9XSvgY3GUeUZiFYRf7ZxhoUUiE4W4i6GVhBDywuFxyMooKBeFhN",
  "key17": "fN9cWVzp3QscZSKm9i25H9HJKD6j5HtinnRKXjYaorA3iNmiosdcAKiZbjG6UiSrkNVD4P83Bk3yWw5Ypzukgbm",
  "key18": "32L9utv87mELDUm3RhAXq5xiqNnwkgbrRjMifszUtsygRakY6Evy2upoDJcAZBRLm1PSSvuhz5Z1fXphRKwGeisu",
  "key19": "2K8mRnJFc8R5y2GeSi22VDKKMPMPvmy5DPzU1jwkeuHbXUGsSTcHC4eeLzMXDqLCmQZf8V6esynmRpxGTip3YRcn",
  "key20": "4yCwx5vu1yy5WYCkVAPDa9JoGzMRWmoUD4Xo2pcyWT1fTDwghcUuoVX9CX2QfPwEAMjzhYqZreFEdyRpFsHDvaqa",
  "key21": "2CkwJUKVm8mauUyqKfKGK2ASTmjrsMPxBKtsNpCGdF1F2tLjdq6nqwymkZRHi5wpqupGCk7Z9NeuQetLGvh9vqxE",
  "key22": "2oKyNvPPCJJwJw97HPYCDrrnHjqP1u4v4ZxLJ5ji8Eig77VEFr6cWVf3NLk2SQNjJWWcD8sCABBQvKiKtmJyoy1P",
  "key23": "s2oePJqyxoT8DG3ApKtFmyrDqGXyQY4168g3EK8hf2TAPkQPCg8sNs818YmbMKRPg7fPRXuV1JGtoXgawYLStDE",
  "key24": "3cenJFHiwr5fPw5NBdUxWLRdcEjVo4cPy99VZ2degeHoUQN8SbWHUpTFTym3ECpAa5gdN56oreniHwusFE3JKVbe",
  "key25": "4XcKHZwk2tfe3KxLN9dKsHQcpsPNpa3e5mS21mDwA6oPtKvwqtJ8QbLtYBxbiSGVxwUFNhA1nW57B2KE5wq4GNHM",
  "key26": "32nKD5VW8riX8rLJW61PNpAKASZykU2CHVFg7VigP3LHL6NFDsJD9eoDrd3NfE5miaJJZYjKYFyFqv64pWuUZ2ok",
  "key27": "4a1eZLoB3V6rgn9SvQrpqJpmWAaEwpnevC4HEWkxW6X2ECnZyQVSJKkwsaN9jsDx6aqWdrLEo31R4vWDjmhw7abZ",
  "key28": "2GPisgV6ZBRWnAMrgD9LBF8Qcj5RUHYSjrc44SjVfpmLicJKKnCrwMDEVZbv3tQ2Gxx6aigLnp6Ha4TbZ76ZafwR",
  "key29": "TtB1fKp8WWruvNQpuotRUJe4Bd78jCFmRJ1iLwMaDFZQo7vuWcJc318aDYzpvttjBTHbwX6fyYCfSqUY2QihXpd",
  "key30": "4skbuerYAerDrBo3gnuk2dDRTBYoLWKKYagBwad9as7oAW2YMAbqmRFLhc4WuhTbFvzSGqDBG8zw5pDErYFKFLnt",
  "key31": "4cTfJem93eebB4SkdauMAp9bDqcL3FCeLjd8eZUxMFUoMMkEU96EAoevuSRR6ztBssgfahQQg8FQjdwSADiYJUyd",
  "key32": "4ajA3JgsUnXoCcrkGbpWmCH38rvh84y6PnWgaCeuyYTxYV7VSmfcqp5v7bBhy19RXxzoFPhsu7f33CeJ2v4qMfgW",
  "key33": "4HsZFLFStxg2pthQYsAFF4Nb3ocSs1UZa8MHetPPWXkSKfBtLvjDS4gdzSzTswjrPFbSok5QcLoYFUSB2aZyDmY3",
  "key34": "5muYvvHdpqgpQzdhR9jqLdJCB5tHcqhnyoMUQYwwYyQ8CTKcfz4ncG1YQj218qCEzWDXH2fJZcua92dWmAvRAjQW"
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
