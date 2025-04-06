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
    "4eAnx3jYaE2dThwTFsrKWYbMHpyS3JsbnsqzY9cLBVKSc6ZZ7LUAniJhExcBgsMDwdFGBUNp88pn7irykYgFkeEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3dV1kKqijKCwHLr82M73zEh6pM2CusthjU31fo2Puc7eNBgYwXt2gU4tr45pVM3TVCDgRfvS4wRwJ52ojSooub",
  "key1": "3ZeD2k3xqcf8LNbqA1pDu1hhtALxdP6fm9u3WEypMXkYuN5kgszEKkqp94shokc9pvGobCSaCToULRvF6oEnJGRP",
  "key2": "47XqsuieFZa1BNoXwHZfcdrZdNaFbRbn8hCyyAEZnLNZsWYe7tm4xSM25X89EPf14WoGkEpKX1CvQQhpBWLaKBHj",
  "key3": "2vPbmgsQkPLcWgzgmJmpDgcg6xy7nQqZR8saKeEg7gANKRxuLLLrfReMxuPE6vCJPCHKDcZk3w4ynj8AQNg8Cs1D",
  "key4": "583EULQHAVTxShia67QHvv21mYELzDCSxV7ui6doNuV9hk7pDP1ivpY55jn4zoUMMRzzvktZEgXLzH8v9AeLYhxY",
  "key5": "4ENWNRtzweoz52BrKu3gELLtXCN25afChTdKggVGHAGMJEVHgTyRbAy2ajXQyvrwhbdVY2nKfu23jEJm2mpaTQon",
  "key6": "UrXLHJPUTQ2uQWTvd1PB4i4V8QGKdfwCpEKgnVYTCsX1NC4RyXindG4y4Tpqp2GXCSP4zqwo6minfM1T17cejLY",
  "key7": "5cGgA1n3z2XZSJsXh4vUbd5YJtNzZiqdji767eKeKFmoiju5gdkfVo8CLdCaU1Lav2oMTGiXzMAYpuoQYfQyayxU",
  "key8": "w8me7V3haRKQ1Bc81DqS9gi4yays57b6GEFhz9uA5GLbJBy73JL7YmdF1iqAUprUx52u7Pzi6DEq7igMCktKMv8",
  "key9": "5zgZiy7EV3prxEdD31JKtySKujUATNTsCAKS6gd554bSgUahUzhpa9YwN735gp9tiqcBPHnxwPxuX3czL52nXRNm",
  "key10": "4bXECWhjwMAXkMNXs6rPFwzHeSLH53ntJ2fqBa7W2QfXv4TkBDowuNY1mM77ULa8iW5Qk5LnbrFu6X3UUxzeoAEd",
  "key11": "3qndKmEwRiL7RGfvo5eV2yZUVygJK9SARNiiuVCTTaBvohcLiPN6UMRimK9ozk7uSS3rKVuCGFG8JLnrZeXS5PUo",
  "key12": "Hutrfm9fabonhZtvC9mU54Zp3f1GHjmsiknEH2x6xFuG2EJVp8w5wywhCvQ79FYwMVaE9jthuM7LmFW3T9k3gyT",
  "key13": "4NPybSQG2v48FspMWjdMcvdwwPXpc6zroV9fPVGDMyehXeVHvnrF3bU2EY5xDnqGHLbpV9v3VTek3JjgunXLvv8J",
  "key14": "5UUHqchg9CF5Zx3mwUYEChaHbbqPYmMokL2MNPNQtbVeR89t2tTcjj9Atmyc4rxEfn3VFSvy9HVWbm6ieqZEuNNL",
  "key15": "5KU7epG9t9RKxAyLyZqWfQFTcKqdVtF25ibfoQGRRC8mrW2mPiLk26dK5Be4m8LXVwt8G9XJGm7prjvoh37YPeQQ",
  "key16": "DEKp2FcNxAFCTiRURqZYfSs8bBmEJ1RGYcBFCiHRuKe56XScPVzJXA1FW3QdcB7eMBMd5ng88poSPXyAfoR7Big",
  "key17": "XevCeDFoBXjycJCExExgrV29SrZPwQtThM2rQoQ5adgVFFnzK9mUp2nKW5681k99hWe89LWDEBDgW6MioFb9vnf",
  "key18": "sBsnpe1nTi3BqYnLSXdseqoGfXRvLZtP1An1A8DV7YFfcUC8BdcEBShkMhsrPoHS6pacuD8Eu48mkkpioLjUJzq",
  "key19": "tyxxeHesjgDyn2F8AsxqiUnDS7qn6rXcLhhqcbyifR8pgPTwEpEncWsGSVV5Qg9k6e7VJVgEN9Dq86YVpWBDKk7",
  "key20": "4wKGtBNU1xchChoB8gqMLnLkdMpRzsVL4nxazG8V3xR6RwxxrYN2Jn1Ws2MMiC5patQk2Qv8rj1rRe385nEsYhX6",
  "key21": "2ftfcBqmDVzvbJsEk6es2Bcm1s8mFyka2FL34hwuqG3s4W8y5QcSF8bjfn2M8r2ZS2rws4vSi1ahZ2J8wvruFhYK",
  "key22": "2EhZS1spxgjUeVA8FBtQd2Ccu8ri9vtQkJX9hUtF324LMs8KPUFqNCz92k1HLSHw4vgnaVUpnyjcF4WgVz1piSNx",
  "key23": "4RZ7bYpiJxe7WnULSqi5QwkZi7gGrtmjA9sRBuHN2YjFesUsWyjLHGxJ5G1btNzovEFkcCESkAVbZNePgDaHP5LL",
  "key24": "4i1vaRmtrxs6ZTucJ25xgUAfubJWtPvhDT41GRDFTVkut74wQdqYnpRYEmtDEcNLM3KmJ2LnJHN6eTcXrY8GP3Uh",
  "key25": "3aT5ogmqHUg8QLYmHrBg1PPFLy5Uvky7F66LCpz1h3rYE5H8C13NT44V2GNrC33zeSu1DDbvNXt5ZTQ9kuhd4wCT",
  "key26": "hZEB15ef95jdRVDGRAygs5HUjxZe2E4tt4BoA9j2811UxTsD8X6c4uXcqBHcV3aEimWPboY1nzGGLXN3hHrJgNU",
  "key27": "4FnFU8My1faof6dNjGF15kFTXMx7dHheKMwKM62hYfADsWHnnmG9TrYo2Vt58q4MHvuCXyrvi9wzYZx7d3AeRH6T"
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
