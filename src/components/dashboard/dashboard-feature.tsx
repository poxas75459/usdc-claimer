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
    "4NN216j6zih5M35FKQgVYG7kAZmv6gZDAVayizdxJ6FVJwKo7MQL58bzRXLtc2pdr1bcwSwv1DYFkwN3xbuVmVS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJyjRBgdqTnMMm2tWXbSAGEqJCK9vNsNa8yGJtinizjy9FT6DWR2B54F2fLUXYGPwG3a22SAoE6k5pPxxsw1BzH",
  "key1": "5sXP7PQJpsM6CffYWbLhsett6ZSseuAS6jeDmNaLT6zp7JMohDLn8VM7U9t8mFkpPwuLn1ngpm3zVS9if4DhRBp4",
  "key2": "4HynFj8rztyqXnKKMbF5NBjBypnLuF3MvLiMreXZ6kNcAXVqNZKddwNZkQxj6n47TJY22Nb2waQvDwbsgWcNjyL3",
  "key3": "4fPGCLbe9438UruSTLqs9srvv4QCd7Y4PbLDt56Jmdy3bzrrqoA5t46ZY8XYHDsJcPYXKk43S4BDEiC5Jm1WVi9B",
  "key4": "65bN8E7KmcPDbbT5xkeFETfDnwg4GPxbbKqJDMc4kRa1X6qBsLgREYw6sdbAhRAKxWv5P969WuZwqFH6C4ofeGcz",
  "key5": "LR1ShqTvANLzLP6SJrsCbRM2HVEjobFjN5TcouqUpvYmuEb1iJZAoQJqBxrz7rGN3RMB86DG2XAyvVTqcBfUp9M",
  "key6": "RJbbaVop2dQ9zM3HHutBUC1RaA2VqTeHu7RXv99MdPYfVLiHuZxMUzcQSwvaC9TMXLsANcZuo2BN3StnRAy2GKD",
  "key7": "5jYu5D4NtRaELrqbETqSwENwcaGomiH87ZeXR84D2Te7y3fkDtkntw6TV3svhLXch6o7NfqKYrbdwu7Z2rA37vTg",
  "key8": "akwxsmCbCysz9zqduta7EFXXNfVa7mzaaK3m9xrqxpA6F8aJ9yrAqiMB8ES6LxTwAUMd83Cq83Fghkw1aZyAtVq",
  "key9": "2A8ZfFimLFRrMBdPsjzou55NLS3js7kJhWmxeJjfw391nZfmmomDkkhFACwaXjn3gjhDKtniQK8mZQH6PHoANAoG",
  "key10": "2mV1gJgggTBFvFyaQx8WUokViGXw6RbnyKwFnnNC4YzFz3621Gh2835ztScqQRHGwRfGRBBtt5kxmMuAkbJmLvQN",
  "key11": "4rkGPUFi3eWnRB27YQXMEa5KMAbhQJfd5XMY2TpJ2ghRGK63Bo9CmfbiVpab5FV74mJKEXqY9ytcT9BaLQzusuPy",
  "key12": "5jDat7i2qVJtnJRhBM5JhDDB4ZAryfMLa9QgtVWRs2gVju8suDdwZhq1qckBXFn5NCqHRaXb687BcmiMEPYPYigZ",
  "key13": "2Ej4ap2gTN2F5bWMhgKS3CvdKxojKS2nAmDfHD2rhJMXGW7fFtTrCAuyNg7EmDyQoiLDxWKNqtJnofVp27MkWcH5",
  "key14": "pefCqULSbpiekLPY6Smy4r29DiUXpcoJVx7eHaU76qUTGxXnTZabAE2quav2EaPSaH49CZUsY5exqzFyNWKz6UA",
  "key15": "1ujbrjz3Ba3XWQJWCGdoBo6J9ms9yLgyhyt8kCSUEGoLFTQS5tcp62pNMLVaqKC2Lzrm4jGGn5BmW8j6TiVbeve",
  "key16": "2jSG7c8vo8tQEXF2QyhQKokokwJf7rmcb7R7ZMRfqAfiWnmF9ygnXtC66vQHNWunNzAZDmBPR2Bfh1DUcdEPfv6v",
  "key17": "4kA11retgSW313nE2AKrXRagoDLcyRqmGN98ewgqvSJJbWkwzgNgXmdjDYrD2B7CbBkJohYBhPF4PDdSN18XnYME",
  "key18": "3k2K4KD9gwYSzVKWujjqPSdkz34tmrFekgtkHoDPRu27oJPgcpoA28tUpXek7FZqyADqfGSMXXyqoTVXiCkuCZ1U",
  "key19": "XQJhdpdPUf6Mc8FTNcn9vAioeGeAxjoo89Wpi933zKRTUHsPseaoeXF83soSkKPzAhDQV2pMDJRfUGzxStPToc8",
  "key20": "48hBeV4mP1muZg61c8QwJgauuE4ZjiEpVPmfNssvmZdJHhj2sgumL9knKZPaENCwFcy5iCuaT9kHvVeMEPFpukK7",
  "key21": "3XXWJY4PjYzACZbrU2FXP8MGwteeJRBNH7FjyVtGA5YwLMEitSNhiDT5GW5c7hSUKtiK4N9V2mmHK9PSarSfNfyn",
  "key22": "PJxnf4V574RVmiZdRSdTpW4xk8zihztmQxBugrWNzpaBy2Z49trzC61yVT3ERpFsZpm1cpGeupytWPWKkmsydp2",
  "key23": "5k5tgkJAZBHH8G4EPjHZD2j6TXnXkpa1SwPFudUEcdkqs4orfaUZWywaSsDqQD3nr8gGrDi52gBB5fwq8nyhj12A",
  "key24": "2FkYwWN4E4R1arxW9aSM958xsHFTvfk6AFRijEwG8D3j6aCmr7nfbWGFZrJS7TD5f9VErt2H3hov2gZTpEVuQM7T",
  "key25": "4zSKafwWbTg2gtQ1qq8k69iSAm2LNdHLzxMVzbgak4FQixmZYPmcLu25X9cFnWasfhS4pGs8L98H4wgAfmZ6fb6N",
  "key26": "MEojG41qtBYpGPkC7MNAdMsU3XRGxGLQKxnKGbHPHptBjTsYeTnJqpYBaoPmTrk1MZhwArXBhyxrxmNyh2rEce4",
  "key27": "3sZSApTEwtLKp6RreX5gTAzeigSAmJQtQLjuthhG1rLmvMgnzNn1NyDUZutLNshQXPc7oo5yD5WramLx7z2bzhf9",
  "key28": "5LhCJ7ZpQEpGj1Bb1edCsiab6AuRMGyz61Vu9CWNeGJgTJgNoBHnJB2PjuEUs6GfXznvJUCL2kteJZUtaG64pBXF",
  "key29": "37BxXVLUezEFaX6suDP5CDMsJFnuX3Z2UGWTdQfi8PMHGonH1WyTfwCrs4tC8rAaMbGYq5B9URq8hLfZFnjxdP2m",
  "key30": "JCFbEc2jJwnQgsvbN7RXoqLyNk7NwiRir1ijSc4nUfhgzJ8dkzT29hd6ZaFRZgMXak7g7eBDSzQn2EwKG9Nm2rL",
  "key31": "a9a8SmHmQFmBRzFepbZ7WeoQ3ccTTajSCrSoa9RiGsLpWQDBBSf2NKF7kE8jLqeWCSoaj24cadMC4ESa57z3JXN",
  "key32": "48P5pe6Ahmhg7EEJA3JgHnBsZgJPDxnsCJkiXdgXMQkucEzEb7xVRD7fFSw1qLkM4wGFsZHsEzCt8VV5pE6VWrdS",
  "key33": "4y56dnVrFQLTipPEkj36KCJQsH2eiNSr1uNJx9RKCcxsfNdMLyTTEdgzRU7Ycj4367YDTSnNQZgugUpyqkjRfH5m",
  "key34": "T8MzW5JbCvf1q43mTFDHzeVgyJAqzk9AUeEYtZL8qnh5bAUnkeVDFjE9wro4tdFsoJsDXtvGWpNV7AxQ5fNb4GT",
  "key35": "wfhbEnVToafXN85HMA9WkGRn57zKaW9MZpbR1RTSmBPXiBeAz4YoP3eFgBX1Ng9j5psQkNpYbgGvsUKYM49WkDJ",
  "key36": "9bFBK2yhtejNVuEBLauBVuRb6sKm561yL8ctttVoAC4Boez1Um42E2oWThz8Avm1WPQ6B8KoCvUi72vZwS3yYsX",
  "key37": "7Y6BXMrzBZJvxMayT8r9oTRHxa56xWpxwiLyNpYuGyZ7jmyhmkEpram9WoBZmqDC99Lhgx2xh44gbiALvMYufgK",
  "key38": "5tx3LwTaadZRyAN6cF2bfJyXmGRifbwSsMo15fWgUJmQbYyEdorh4btUPZEJ7JR7Kb2gqyPbFDPzmRbg36Etaxxt",
  "key39": "4hJqHCw14DRaTVArhxRhZivAMkjR5ezpQ3XvgwWpcs1TRGFcCRwKsERstRGmYYacZej1NcSCJDAdLNU6shJhGFf",
  "key40": "25Vh3wXHYwvR9SuZbNh1uvCYYspWoP9sv5V1BaEg4w5kUoqKi2fZeTKqXTceABnRcy5jZJeAE5pmyyDc1bUMBNNW",
  "key41": "5p76nzcjYept5sjqWCu6yANev18N5Q5urdp3eygKGq4tnH2KDyAPeP6akhCJAEGhFkkKkM4hQz9SiodAXh18TjbJ",
  "key42": "Vjkeg3JE96dJNo2pW618GCseP3HLDm4BQ4aQoZiWrmCVBfgkWKtbLGFu4vZUVH1zSAmwa95Sf56hpN3ndrX4ZxP",
  "key43": "4pwDAR4cnkAafwiJUUVmMt76V3gnmxZrtzcEPk8anQRAeox2sLCeR61W33uMjjoq2SpqDni6f9wJ9LZWqvDXQFB3",
  "key44": "5eRANUP3s2BzE8u9cCPwMmbELEAuseb7h2x6Kp4ozkqCHa9TBNyycDCoKG9cQuqVnKib6ZXN3Nu9D6gLJxVSzEWT"
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
