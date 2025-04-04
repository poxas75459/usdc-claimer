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
    "5o3cuTruMenTRLoqFKVgRSoaPVw2awnggwSjFm55V5Wmen5W8RjBFEzCvf4hRAMo4jQz4SZwXdMW4L9PHVY4o71o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bywquvyAs1fmsqTXwvCazwwEe4Abt2wPW3RXqoWTTtCPbghkH73DB3FLTjDMdEjJRcpw2buqHLxG1BfuUJGocnu",
  "key1": "4r5RGXM3CyhyiVgcTABPUebcrru3ZhtWtm3FjYNqCxqiA5X6mzHyXQyVEeoJrdYCpoo39rTWYiyYDd1XksbpDVzD",
  "key2": "XbYu4945GmuoGSfe7WQwWuHhWQ7jRtFXncn8p4cyG2jPzkiXwYBADgjEGxjDE26AWU8WiXcKvhtsA1A7GrHyGti",
  "key3": "5wATQWpSTvFTZNMXoY2bDeAATDtEqK2gpig1Qi56M9eWyypRs4HsfMpdDhvxAZWj6ne2PaQD2ysGc9XqHrbkK4pm",
  "key4": "4C3vHwbasd8qi44a4q3uj9Biryc7tbYiz1SijAbwi2tPyVnP9sYWtc5X9AjypHbHBJ1u95eU9pCChRBVs8FGEwhN",
  "key5": "2V6mNW49Cfj5V3sV2be47dTi2X8ABDDCiMss3ypaXjxKocWW1cKSjXJJ1fyNtHkmCbEHHF2LmHkD2X3GSvPtwVmb",
  "key6": "3nDEUHWiPUqCb3Witi2PhLKwtCjcKTxKdfW8ztuTWgTGHnS4sTK3E4cL4dddMiG6M7iSD948NuymwK1XHHJeajXh",
  "key7": "nSXhC8DHNKpJ8EUmo5VmtQY47z2aNGoapeCHCVoJFSne9kQRwgV6gde2Lmr1ua6zTnZre7C4RJiWD6cbZ7L4uSj",
  "key8": "3fgJApkfzDZb35NN9D8LcQ4QU2zrASFA7NPouRQbxAiGNkSquLhHo1X7dF32LEkMSopDTj9HXhnhRFCeZ1wCQQ4e",
  "key9": "2YCG7xfRwfDAoyYLrr4xJSj6NqVv1s4yXQbCetNxcpkvLy92qTUomouEmSKxkHnW6HHj82K82m1Q2L8uWVnAVAd7",
  "key10": "3pM3vgWmyo9CcyAn6BiHVczqCSqppLiycxxHL4AK96zPRXC86no9peVZhNgimDc5xV4YJcgMyTpAnt78h5ffqv1n",
  "key11": "5y5Krc5SM9S3BTxovgcXrpTsvbhzPUtavShnbYnX3rHJXKnzEcT7g6drAgL4Seb9eV5Av993t4zbXUmtoNLWwqFS",
  "key12": "2KDChi2WtzE2cmtmMx4km2ufarF5EZ8nSdPuP9NxFMStUTHircD7hgk7z81aP5AF37455hYPei9Xs3DunkudzPhS",
  "key13": "FunDMyjwbHBWMkecvYovC261ESqHWjUvu9zkJrf3R8ZMWKkDiTZG1pnQYmV9vBQSDZ4xhS4mBoiYkuwyDqJ8UGj",
  "key14": "2jD9ijtbHTM5Aj8nkwii5wfUpHXdh5gMUUawK4ge7yzp8LgWXBhTsrL7FJw87fM1q3fVSmYVsfLEAXi33xopVxgn",
  "key15": "4PxiEDd7xADjv2t4M6PtgDwoa5LBTCHBFZvH7Z4SrFwVoA5qqDohWnHZGG6Z3UwtHay7aQpqcwdsSPFbfrY25Wcx",
  "key16": "5wSySEUWCsjehwtCxV2rLhfe7TtWGoXjH9PGavjS122ufYSdW9VxmkwM5DZiShBfMNPHqALwRtiq8Vxknvi6vusZ",
  "key17": "9KiLNhUGU7uqMR71DyYzXBa5EeK1nXqoUVzwt7jQfgWHGkkMbsMLfrqHUkVEQxPLXeUdS8Dub6skvAmwQfppuxA",
  "key18": "3FHDWG64h4ahx5hyc9aSg83tbTkcMQsE5xMTFrzjXk5JqykWKAVJvQCnYDk2M6Zh1zkPsVJMKcRVrGivg6mvdxkh",
  "key19": "3sNkpEZjGrKVfB781dpE6Nt56E3FJY5fWc87NrpXReDXT4RhAbyjSnqJoWGcxzDSWXSGxw8kY5JjWdUn8TFWnvYH",
  "key20": "589JTMx96KASzixdkqaD7dbeaYA5Sn1jySkBcdvxGpxtALT2itJTzSsuKgDiuAcHZB3XbJmTsKm4tcG7r3SGHzoN",
  "key21": "2FzUHuZuGNfMrUn6awvgkYmBXuKjR2woN3wsaiMAUtHYn4VL9QyE8NGsY7WzzjkggVEbaxpxUpazN967Sobk3kKd",
  "key22": "33ctHNgsB428Sqt9F85kTQLGNpWPNfffogfKLTbxScKuN2rqqT72ujjMM2oRCXsEd5tyoxjZitHpN7ssvNGW1Qfm",
  "key23": "4oKJAqtHDScDQfhNfn7xTEKs5ev6ecpc8L778JYLae9aeEsB3i7cqjoc7JFdB16Gmo4iumZGpxNZSr9PRkfMjrEU",
  "key24": "3QJiFmeNvKGnGRfNKQCHnnL2cj4PwfpBWkyL82rTSnMBAVpNRxWxJXwdKAXt1oC5P4KR3TMLTkqxq9uvmmucxD4i",
  "key25": "3suTgQ3FveRPwj2iXMwaqS7GMBcEqKrF7MVQbQpSNTnnxksBMGtH69ThEKyeXn8QqHNFGt4GktSaLSCqERUC5Pyo",
  "key26": "61wtEyiH8NuZM7pN4FMcpZGV5b56F8syCyb4SrSht2VfbX7TV4Dz6UMEEydCLujUyWoTGRGFtNWMUnKTa67LbiYj",
  "key27": "2kxpMPHaYBxD3HDU8HY1BbN6JE17yLBKkXthcj4NJTXUgzhy7oui4ZpzzpgqA3RBSWVJfXghGXtrbu2G52JgiW2M",
  "key28": "22XMuqtSCkwwxEpcLKVo3Zk4WoiCACG9Tn5fcXbJzre6SPG3xTbBzmq6aLCngtPBEAj6dqSdbuspTn4cS6vFTXLK",
  "key29": "r9U4Cg58RtBVkNoMTtdMp8ugZGjseSqYMufHUhEUem4gfFJkrUvJaroQPiZbRiwiuDPhLfn46uJJp4i6uc2q9Sq",
  "key30": "5kAMx99uuEhb7JEoFRaxTnNyEHXt1Fr3rnC1K3yXnhLzCBV46ycRFb8Nb6R8QVHNqjZihNNSsqo1vi4CsiCvGr7M",
  "key31": "4FFEvvN4UN8BZbA4XCCQbhcuj7hbBtCddNxJjYQgmR5fEQL8XBE9LuMTaP26YFgoBvbTutYqWfdb2cSLTiuX5DE5",
  "key32": "yH2ZkTCXbjPfWd46nSGtN3p33in2Md1RNU4YjTsaiab2z2Uun13eRHpRvHqBKF2PxPPU13gBfTGsohkDbZmaeVu"
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
