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
    "5apjsp1iqZ47hdEFpWUBukZihJHZeNZHk2kyz5ZM1ufU8dXdU9ky5JwiCtMQAPu6iDxu1esRWFnudvYnpvcAZBMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lbsu69nZW7PUZJ5m19DQsu8XR5Q8Lh7VNrBubv8HHZuLndV7BU1za6y2btnEN8BXt9YLDXXHdii9qzKNm4KYfaP",
  "key1": "5GxNK6BbGpNxduEZjbGRQkNCMjQesasciKtwUR8WG592beMhJKm6bTb7jidTURYgkEhx992BS4rxi9uz2UjMhGLF",
  "key2": "54n4MgqEBmKYXUaTLcbv9oCVSnGQ2CCX2BWNobgQATJvCQfiqUadGpVwAiQx7Y5t6t6g2mNuGjxMn2SF1zmZYXBt",
  "key3": "3uxH39knSBwqQhcxZs3s9zX1GsUN8Lf8LC75DRSQCpLFh6MSA3x5pCBgLqcfiioEaUNssFNs2C6RBnoiBTvCPEbX",
  "key4": "5Uq2xR5rQSUzHQ88VhdCHUQDc4mkFMKimSrpe5krBRDUjKzUpYgZLs3oyZPxJcH4XQ2CBQoFZd2Zia2MdJ5ckgjr",
  "key5": "3USLokSDH68hoR3W7m6wzZnMpHvK5ZXd1cvfVKTnuarMZoMXJMVYS65euS61Fe3A2KdM3wq2aDCunBo9ACXphaqo",
  "key6": "5JyUhSaJoJw24XaX4mRw2uLeXvLuRgpM5mTznkJkV1cMmHmuqBTsPCtS6xXspjiL8E2hKm12yvie1dSzbek8GYB9",
  "key7": "KYcy96JUkAGFerK65Jecsua9pWp8JpgpN3cdveQ82prHJoQHmFhxqbLvKB8kyZ8LYYjHjZtRQhQy25ktasV8nc1",
  "key8": "3XgtKrpUhbeZWLR6JkQhDXiBuLVQfijDfq5j6ZfCGZfJ1QqMSRGgM6bF8j39BaPuaP9sPrNpggjt5kio9hcaZ9a9",
  "key9": "2dxzpAs3s7FDz7AiGKiBKM8HMHka13nXToYPxmvcnouSSiDQXGEy2Ppyn2EsuRPnPb9tFFdtjczEWy2wK9m9fg65",
  "key10": "5Aqz3GxKm9ccAac6oMXVZfeUKMCkURVCaBtaFA3EdjqX8nEGqdNzCYyK6rNAYeah485yVhBodGVfmGXALhNP4uSd",
  "key11": "5JQb5inmrWHQjDqUGRGx5KVnEfc1DJvNrNfa4CjvLJLvqfweiBCyFJyaLot8yrFMQeQ2pKXnkdh6mz2LCiunMmGQ",
  "key12": "ckuG9E8t6Lioeb9ECdm3Lm16yWh9cZfj2ztDX1kEQg85r3w6bF4oVyZYKPyVJcZm6U331AD7UfDi1DBVhYEEyTu",
  "key13": "2DND7XQ8juoS4EeCbB8f7jHTTGDgshQ6cCHMYn3BT32hFyNrHk4VH2QebZHP1iH8Wyz6KG3auEDjKfaE1Gtr7Y6u",
  "key14": "3nkqSF4EJgfwWteZPaQhmfkMfxfnyVBACRAPBHbZpz5Bb4FoSwabGs9zjr4NX3BCSSHNq68yGKENKp7nYaXNKe8h",
  "key15": "3c1CnULajrFsuBEyP7LS1nZC3RRUkCc9xx8jzWniWbeUovt5Vbi6JQWyMaRGZzw7pXvysr2Sg5df9zmhyt3EHAPm",
  "key16": "3ufVWZMJUsdrPiPykcFJN39Mu15EFfSx6CvUXTH6umeQSfwSYH8qGaRJ9vphsJ1NnEaeT1XQ63ALkMwFHggUJLKq",
  "key17": "b4PLnkU8NU7nnJqaDKWUVc3SSUUtNxT7fVfXVpCaZzmmH3njttXQzGeDwMUb4vsRgKwv9GUpKEV9eyMZ7LzeFh1",
  "key18": "3bp1jGSTHrr2SMjmkCVVoXMWVU8JuUnuBLBE5xJtpdbtKTrt5w4LaEPJNJAg2PEzcZFuSRgFjDQMi4m4y1FPq1qo",
  "key19": "4LNS2HDH1FzrBKYi7ewv3oFKU1NGSw9a8i2bGDrsgrcyMyhLqXy97KzSac3Jgaw5CQB9xkVtJJ46bXtZhTPpJ6mE",
  "key20": "5z3bfNFWXwggX68AN6owCETEWzWbVMqHay1NqT3v5YJZYLGmhnAhw3Dfdv1nYvs8Nrcs6eBxmdmft4DK6WMNVJBP",
  "key21": "5KJeKkYTk5pKNyucsVzigxr9yAZR9n4rT4z8oZ2tCCS5pMDwv1D4CqsNUMxDgp7kYevjRtYdQkjKBk3TBPGZT76r",
  "key22": "45Au4C7bst5er4vdR5XUoXMWHMcy98bWfKLwFvUSyi2GdkoWdinpdrfpNQZheEFhRJKdjD6Hszcv5ELSqkn8s3td",
  "key23": "2DMpj1gonSEkQTQKf86FMmDiAuSfNYwQ8wWCPbJdi8pDna9XmydT3ZQ4U5ZwD7apPhu3TaDFtM86PwfdoHPqCBLE",
  "key24": "4cSpmJa6T7ErGozpDXWiFw759xH22DB2rEeGGnThbe62kAiPM3UJow2yQPW9E1WTuejzGuNzjKBMYNc49YpjcTd7",
  "key25": "25tg7TSmGx5fdNnWJRn3oFQeAEgG2orQXMkiwDWa4gRqHwwChXutrXRpJEdT2EDD4RUxvxKhmS4nwL3LX7epSnTV",
  "key26": "RKbbtamTpFoESaLprXKemzSyasGTKjHhVE4cdgc68rEgxMtR9ThPo3YBTL7boL1WVDpB5s8Q2vAbpcqedjCGCfg",
  "key27": "4dXfWGRuxUBy9wxYPebFjAsW9DeSvsw2kDhtGzHNo52qHMzFuL9ZQhZ5G9jD6PiGrNN3ijtUTvbRwnrsLjQUQBVs",
  "key28": "48LvNYKgXEzrFKDhVTnAYAeTQpm5YFS1GAK9mAN1LaN3eoebrw8BiPtexduQBBod9otPr5L3HVvGX1BWUyU9U5sj",
  "key29": "2qCaXmuCAdJxDybXmFGcSCDf6bsgU6e8vc4fHFdtJTHz7jCbxVqF2rss1U41mJGiWPGP7uLHRWAynRBhjrypj8iD",
  "key30": "32iQAURzqzprjuAxw9gdHcK7S44x7QdhWSr3cWKz7SntLSLfGAEp4QDgjLLrdf4gN82MummiydrmzNxMHB8STy12",
  "key31": "3KCfDfjUDZH8W4wWwudQUX4zwA11v6KavFBbJWHJstY4trSLYVShDdeci44RgibG9sRA9rzpfEF9YrJ2RxZQVcBt",
  "key32": "3y2vbuGo1o2kPYdWvPfyYudRbEh5JijV8pXRuDuVZX7s4oJFUwhVS9VjAAMnSpToP1RCjFb4vaZMVXCPYGQVs9fM"
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
