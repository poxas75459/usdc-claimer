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
    "3guk9Uo76p3EQDp7Dc6eHCVCayKQweHGLcPHXhYNWCZ4p2wybiGsWsZH5dpCoXgttJtCzaQcQdicbsH4422RpazB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H51RXur11VPmzdgGBW7wx3Awf1XdP1YcGhPkUGBZy2K88v5tHv3BcV3NMptj8Y3udy8g8n2dfPGZrFUBxZViN2p",
  "key1": "34PDP5LdaJLvHfVqAqz5xtn73w6G97xnKPxDnP8JUZTsSA2PpYyZW1TVSihFU8EzbJj2js2N9vtwE7kpk9iSW5Cv",
  "key2": "316Stsx5orN8eh6etaMjXJxuBuGKCHLA8aJ8Gjai6AFXrCS7dtrdtHt8N5PKLPMi9wrnTDDvnMi9JcrExchfsgzu",
  "key3": "2mnsjWuZzfYoAELszd6BbksmQpagtY7DHQXoZHnuGFyV2FmGZuEwJ87gfq3y8oZdHcrWBDzAWXCBjw2bWc4HJ8N1",
  "key4": "4BLygkgNPUVP5BG3aF4ybcvakYRdtugtpFKvKKBaddgF1R6WjaVJ9F3L4kDWUpmvxv3QboaXjAbd6CM2FuRACiiL",
  "key5": "4g4aeCxCrQsnUfpzqkvia6YZx4GmvtpuxdXHDnQSh9N4rtL9ustFZucjrUEkZEVpKLWmLKQprtUZcuiLTWPPoXep",
  "key6": "2PoV3ApMejneLpk5egLFS6vSaEXeyNm8tDeXQb5Re1ihxSwhkngRVCTxAV3tA1g49iFv1oeSHUP4FhaJghoSaYm1",
  "key7": "2DEkn8ZWxXrEj8Eb9HLVaTzKTm2PBorBbs9SCuSf1w1Cw2PQ9Yxzc1twMrnJAMLVKt53w7nweLAE2U2dbRTLV1w2",
  "key8": "4ZDAQB4A6D33e7E6UwhPZPJpVRbqwWcehMcuvBbdxmnY2aEAHSCxu2fRGUxY9HkS8hqjGM8DxpGyoUDRt4icV7oX",
  "key9": "2XaR9dsuJxvnQ3QVazUdzCCT7sGpewQ4SLaxgmtzk7Zueut4EaJiJAJTY4vdncGLnpcWhrbHae8jpeg1aHDw9aLw",
  "key10": "5HNjzwQWMx6Jpy13dxueqfAENuEiM6dz7MDDVi82bzETrNMC4Zv22LtCmDXcYE9DWYY1iwfxo1a6PiLXfYgygYqD",
  "key11": "KGDPf2WnjnvdvMZ9jKgctPfmagrjuoY7fb77ychg1ti7hRiVEAuW2YBuUTunALG9d65odUntS4ALoinQUYSRb8j",
  "key12": "nqUsTdtc1iAniym77oyowNdX1wQPFU8peGM1rv9tLg4JCthVtNFnVeqLiNP6gD6d3spCaB8stJFspbxgWqg66EF",
  "key13": "9twmz2uRWT2wzqiT3UbkC9XdRMQqQRZ65dD7Myp5s232vzVb69ATedSUFwD2UQLKYFV3su2L6aGFviYSK8fg1pV",
  "key14": "5ceXfeAZbTPVGjEZMURVHEcamxPEDXuyEhEyNZ2hTEiTCH7Y4po43A1ao7hrn9F5dq3Md5FQ641d5yoscvb274HU",
  "key15": "2LgmxGNFXJbMLCtfDGz3Ezvgef1VQNDhKqrEqfFEBZ5AZ9MrheVL5zLZ621Rh8s9KuFDYLqTmrTkeFGKEr3UJaZy",
  "key16": "VfSLHWwuNHesiUps6eq3WETwNbVZw9mGHicuLwkTwiz7grnM3TLv8N3bxbE4JjfBzsCvtAn2KhY7QXZGo2pDUXb",
  "key17": "3ywHiosEcJzp2fotfc5nvJob8xRrMJurpQej5pvVLDtW9Hsi7XaHTL3YFoQ7g35YFgvhX3jj4ZQHZPNvoHwVg6e8",
  "key18": "4D7kxoeY3T5qmjA3aSdqTTP7QaHTzTGXUcAyvtkW6QPcA4hE97ZD4ipkyoPy7g8XjTY7jSqeuQgwkAT4pjGaoj78",
  "key19": "57a13mwBBpm4A2nzpa7tA7Et12EsZ9PeLYP2jjzpoVWwbCWu9TeXywBQiPaqtNcjyWbNUrXJPt6LwHrrXAbYfJ1N",
  "key20": "4QsbdjUyVjDHFKb8hZ5Es4kqn49Mc5zT81TPH3t2K3xVcBASj7eWTsRNpkMD88oMDaAeUHcmCA3Kf7CnLfaf9nxE",
  "key21": "RfdQXQo9mbSbuMn7uuJzEG2hmx9uw5bTWrdiS15drSKpkNzQYjZ6MjzS8qLTjE1mNygnVidcnRCADwJfxiLPXzZ",
  "key22": "5NZSDz3kNCyw8fej68a5GFn4135gLFH4At4ci1gaHesxb5Phm6py2equvuNvad7m2FZFtYTy93qWXaMn8wCAEYqp",
  "key23": "5ZcCym2cgiwoh7FPULd3VbbhSycaEYwG2AQzuq8D1X27HEfzRxX5VWVGghb3qRaLokHSSXAATdLQWLk8vbjvHnAh",
  "key24": "49M6eqVSYgYexsLzfQnd8iJHLbkZ84s4yGktefTnNTdccRvYVyZycJcqy7fbHFsFebqnfKVwM1PE1t4tVJjAnLgR",
  "key25": "29AsbRmA3oK3E7yeijx7mLWecJQq879SAWHmpJKFmFATaisK78ss2SJzq4vyce4ihcwyLD9aX3LNWEwScfWHruP8",
  "key26": "5M9Ua7h1cTZER2Ppnh7TjGDX49VkiQhFsKisTJwZpveHwQZrULt7AzfdvrbNmrXe3W2QyA7X62ztdtSsnDChZN73",
  "key27": "5FGSEd22ajC24Gv3Yv4RUxf4SPe93hBZhbXoLNV6Y6vSJHRN9f6CrjjRxx7CJEd6cCNfWjKnjRKYqCKGTiiPR3wG"
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
