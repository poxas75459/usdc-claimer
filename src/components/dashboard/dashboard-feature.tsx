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
    "4LK2jEQRAPSJdkue8XZEpPJqEwTkWGEtui9t4a6ESGFH88XAAgDWw9EUbiEQaxs1sfzZobVRrEdidCDTUkfiFtjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjP6SxpSHn669fzTkatTfoNG5ef2VuPJCDdzmmoc3JBTyc9z4A3Jkzjs77MU8pcfHvhnokkDQnUBHW7smaL8TfM",
  "key1": "3K1aXYXj9TufBLZmCGpApqwmd29o6JPuMJL3NfUyp9omLs57aeVgSeyZ3MGHQXtFmeT3GFqQbwUdHNrjXpGK9DZk",
  "key2": "2VjuwKCfgwog4PuUxx2CRjNFMX8FCpJiGBLoFBo2kUJge7GENWZk8AHEZ3VmB3MiyEbiipBGpfjv6KGjGYa1MSMM",
  "key3": "sevZ4w78cLtyFg7vA1Tik9jFBAJhGKa5DqbZN8doBL8occpZkj3CYBLc79rUci71qYrydrn9xfeCT8maaAbHGrf",
  "key4": "4YGAw22mR7cnUBmVBw3jERXvNJYCMgrsocCza7QtDspAULfxjkoYhsh23rjSMg3KzsDaawAMPmAfBLusCBXkyGPX",
  "key5": "2Fbqp9Dc43q2qEWP5zX6zRiyqDejvcJ2N4yQHXsvbkEiwMxTT9Vc17MFo7JKJoNErZjrNRSf3SCjUGXc9Ke4nvhE",
  "key6": "39Cpsu6UMoguhVwM7CNCf1JxiL96Gknok9P9HvXfBxJ8bM2buFjFJRYkaKCvF1SaRPSuT8VPbVYsFsXDevan7Qx",
  "key7": "5MADd87mnwqfQ3EPpzn3vv2ijZbBk4fkpyQahX7EoddDfnmSM2KLf2D4jZ8LyBtE6SfDgoRdeUvhL2kj9kFyho24",
  "key8": "3xuaDRwzGE3D4wZXW5aDRRv4rTpZQcGZh59VFbZ4RzP6GeaUkwmKQ1oDQDDpn2ahXvhB6iw6r5E9hkRBK1v5PGsL",
  "key9": "251hbnnHCdML7hK9k5VjAehqBcaLer94UgJiL9358J9Bxozj76nQ86SVQE5xAstZVzemEHbxamkVaQ8CCXfWUFdA",
  "key10": "4489nCsW6gAEDk6k1Af9RuesVt7kGuCdqBahumWcHsWn8dRjXoVzUGF361EZVdBxmPesGLhUyVctf55rwns27wbs",
  "key11": "2ivhAjk6ue3pn3jMEP6juGoRvxoDLNtyAMBVZwoYYT6zT9VcBHNvS2DJp811nrWPo17rzxenJjPsVi4Xb7ubrvUA",
  "key12": "4qo8ugi6ahZeBt5CPEMyqVNrJEN9RT6d89FGZQ53BksKXDmJEkogBAatL13AgS5Uzvp1KbK9YhVhz7Btu8artDv5",
  "key13": "GqGayhdgEdK3Ux1u4vr3ZozUfySjh6yf2cq53KYM3U3Bj7TgQKQ95VPURLuzRHbcCxd35hwJRJcMyrL1xEqc8Jm",
  "key14": "2mEtDhuKzRayATnkqMnH4f7pUSyy65DKhmV1Hm3McwZbioxCJi2pp3AVLRRyhsjjXcRrdpUM3rpUMhZjmrHRyuDW",
  "key15": "3gBSWipyvijX7rGBzsAb5taUJwauRUgG7MyFdryJQgrHGTEuhiBRKq1HAYaLU2yHwKqEHnCShXaf9zV4Gwn6ACsw",
  "key16": "2XHMQKVQDAoK1ei6U2SHGu5AxSTUUnchzAU3NzK5Kr4MnG38urPsEqCKZt48izn8YTwNNvCNbNyiB7X61eed7kU3",
  "key17": "2VKrWK4uXBpTpWKnbmuUmJoasoRuMbFGyx64fe9fjzEgtYFa9rskvtcop7yAgGXW3kG3EqVDNLPGZW16EEnAGjzg",
  "key18": "3MiTwLiBgB5pS4tuyqRDxf5G7ScbECEHgXKUomUyKPmQzioSqsgcbxJzKHWprbWr9SZWgw8bfzMEWDL2MLTbHCBn",
  "key19": "aUunGEySnm18BC23wgdYs5pbQmthBzYvbjtwSqV1idZpr5M57mcQWjHkEHCemDJsAC2aRyN7gLKmcriZAUZzKCg",
  "key20": "2wHUZPN5oyoAZ6f1oCh2LSvtrvGwbhafrV5VQ6dStMExkng4LE1cbjp3tXQ3XGJoBsNJQcd1EMJ2Ear2g7XeCknk",
  "key21": "4PWB78AZynuimADS3csqhnY95kzfiJ2mEE9nywhvU5oxP9aTPMysMQE3DrrntK3hNSg57s2dQqpFgV5Hy9FvGV6F",
  "key22": "5ZVJS5VLmQbqEePa6De1eqvkcphYKc9frm1tShw1uNp2udm2KsnZeH9sWeg8RyNV6eQp4MgVgXJrW8ozJnKSiAwc",
  "key23": "uGKwRVpPJT2nYouLvx7tokZ676NrjKW9wXtobDTYyUsHawFhjpozdjwvwe1Qpdpgc6uWzDeEsESM1TzSNu7ka5V",
  "key24": "5d9of6EfzUnJYSxEqnzcRMcdiRNyBmeAP9EWAChHsuvQswpTyHHUgeKAuiPjNtGTSjVrh91TqYfpWSaJjKa1zCJh",
  "key25": "4LkPzRmRqq44jPUv4PFTDPMUUV2PFB7y7h56dLdUczADSrU9pyhPqEiNdAk81gvXgk3wfST1p7MyfCwQdxQVnPqR",
  "key26": "5u7hnZqvNGkHA3pyTn2SGyRjJPC2qGBfpwUABctKs456WBZ6gGRoFXkwmnb6SVgHrJf66Hkq2RAmLBvFhmyxq57j"
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
