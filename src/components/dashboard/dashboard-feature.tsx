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
    "2JfrBXy3EZeVt52bsVxc1KvGTCVStZxvVt1kER8zk8Z3YdDkozpyqch5dr4UHykVusxVKskvQpgsXvYr53xwR3y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGrcyhHTWsvjx7AGatheRe2jRsANrxqR3mEZLo35WZrYp3snaVWVdhmZsHqmnp2NvuHKAjrRZjRYw6yVLpS6BHU",
  "key1": "3UmWnk3FiKSAKDxMbgxR8B8zv3t1PTuyWWGmuY3hpchth1hjcyciENhjBr9pye9gsDxtTthEzPj2ev1rB7aAKCAK",
  "key2": "KbDkfJfS6vfocAYEAR162UsfrRbBcQSnK5ADbURrySSXAw4ZYo3MD1iY98t6W8pF64RDRFgYzuCpXpUuodgPGVs",
  "key3": "4dL6eVKvFDrEBLNickwtP2AQKCxKfKeW2ktagXLHF4LZCP6vvS8oZhyg3qS6Pmhr6NWf92P4EH2VHpkmwKsEjmmq",
  "key4": "Vq23zFpGUUQVo4hSCnSL155QJ4LoCN8VhcrG6hvaFQvDcUXpV6Y5udE8opvZwrLXQRcNMGUYxUuKfNhHJcxGEUQ",
  "key5": "s1KjXUU45qoANu11K5vSrPMFi2iK6STfR2pGyLju26MxDTePBywJc4bwnstpo3KSxMK573Ev7iBRVkLsugS1XS7",
  "key6": "XNHRzvs41zSAVkCpkxoPvPVkVyBfHH9M6nz58NwLxheV2o6B5pmZFnte8dp9dTbnE4AudMqAEDDEF4g1S3zMsEY",
  "key7": "2UVCqLfi8acb5zmRYZKQGWPgNgEKt3d9ffFMYfhVVcXQfzopoSHpAKetXPeVkZfuyco2z6aqoBhTj1KVt5VijeKY",
  "key8": "2sq8L9pmETY6MS5ZA17YfL7NHLWcLStZekDVxnPpAWiV3k6N6VXPs8dZL5BvRGLkkPRgHS6dW3vkTKf6ACtvcF3t",
  "key9": "3KCT4zTZYe66ZXBjCHbYHukB1iD3NDBZzXsrB4Dbo6GoyGfex8z42sax7RKJ5d2UVKNdRBgdpWtTNjpnWibvwJJf",
  "key10": "4HGuEMtSKP3tX7zT1HXcauCPYxy54dwFiQ4XdGMgxFe73GE7HEmuCp1ghgg8W2CvkUB5EXT8uPN2UHFznR6eLdLX",
  "key11": "5L2w7mcffLa9141hrcbefDrJmRfRKEXamDuoCYfFLRypDp5yFnPAoqSfhbqoyCdvFgY5KAQH3ojsxYzuUgwfyqFo",
  "key12": "5qkSsShHivv7YyasLAyyBwp4ET7h9w9knWVKxjdtqMqstm14acANsiXtc8KRxhDhvkNUeox2BRfUnK6GsyBUD2h2",
  "key13": "HJUZEC6umJ26WC8f9ptFvgACF6Gc61C2JAfkwsncHi4Gr9Wy1SuusDCBV7NCfRVFGgSdeuQ2eLfcum4Bgnqmyyh",
  "key14": "2HJHDKeYk6rDs7HXig8yX2NAriL3Grgt2YKJM11NCCe11V9jMpbJbTsVURTtQnXgfmn3ts4fucgbgTUfphkHQdrx",
  "key15": "MiK3D4uB9qf3UqGK94Ym6QvYCqAASwXAH2Becbgjm68RFAXdM33NUzGFoB9zhrTrVNmhuLnEaEeFwcSnyYbp13R",
  "key16": "3DoC4r1nmcA9pCAcaDEPpzkUGm3Vm1DcdxmPRavuHQM6VFSiEGGv2mp1ASVBY1dvnTzJ935dzQ9ENYfhtXfrQBRu",
  "key17": "3A4c1SVkToePnngRTpAgCuET9wmn5478gwiv4FdvefwSML6oPN2nKovpkkwjA5wcQhyesLzXQVuxpZ93wokHgwTB",
  "key18": "2zU5NJn6mrJJLzuNBm2N15UgUdk5mrVbxiT8utc3jdZqtExqkexPFYnm72zYrkMXw2nSdnbgM6sVNEtaMJ75FGHs",
  "key19": "3AtfFp2DUa2MgngyybdkULjftrrdUEDEqv5CdA5suJNM1QWZoweW9krs1vubJoM6TTpn2Etm4WRwcexmgBkoaF4F",
  "key20": "3Rc8GUXVBYvLxb6HQwwgwQo5v2Di5pKsqwyu5YafkWBo7BhUstxCq4t25Liv33saBkAveoMTodoFwF9aVVNn7GHS",
  "key21": "22Rpju2hTw1QtVCUbwJGuXLxaKQTKCX8qQVtmugLgAT4GNCwoQgAGUiKv56c4zPLT24yRfJmRgLBJUr6eWLmfeu9",
  "key22": "5zK1hBqCYmX97dnmqj2QccWEWWCqMPM9SmYGD14F6LhTUhuMrdfXaRiMP9wEMHggS81eDiXAda3D6H9jPU1pw1iC",
  "key23": "35JHNS3siGHfHHGxM1RBcws1r36xpzk6S9y48yL3pr3kdaKP71pZ4hHKpLWZF3RG3kHQTewTKAGbJeiRrLcXJVFg",
  "key24": "47D4egVvwek9feFBVXWM8Dn8Ceh7JrmQnbS73HXx74EoyyTQQ7eQZK9oo6iaWKWVcf5FN4aBh88MMiT2KTsy9Kz8",
  "key25": "5WFEBzAFkQRwPXiSMFDyRqEHUh5KpSPEXB7RA4Fzh6afkrED6qVACjdacjWpZbckgpJ9MXsEbJHHggmQLUkMwyPP",
  "key26": "4xkXwnXAe2oBni2tGpKsWx5V14waAENzk5kqVRJLbn3Xdktu9RutNQmyBHJM6GvLVU6SoaZnVeRk4owjxosz4BZt",
  "key27": "66apCcnLwvKcJvKbxKdFnn6DDRk5CNBrhMCGrztbXreLn7ZSLnNdb5s6cPvP4UHzyp6yu2PSho9y9S3HhkLBi8Lr",
  "key28": "EfEa6xxxUfiiMXnbvMMDHN6cq3uU4EPDKht9XBG5LunfBdxeocFQ7F4fvZTTpfrKmQZGwyZSVrxbaBU42Tx1KEY",
  "key29": "34KAF3jRbZ3bKJqYk89VPkCJDfcaG5VYGCUMnWEv5wkkm7eTAsV3ZVNgJjj6Ex6vDiP8ULLE8Evj12EvCSFe12Rv",
  "key30": "5PeiJFXqFp5eK21a5zC2vJUurEbg25jRbDTKDM5xeJgmfDgjbsG8j2ELTPmDK6iA7z9TpDUrF25ZRJK7jUknAsYT",
  "key31": "Gwi9ecgXzJXT1mUGU7HRrfB2C4nnomSqCA7qYXn6tLyihJEYGeZiBBPRk3V9CT1bhi3Bjbx1qQZw3gxu2FjHqkA",
  "key32": "2xCf4ZuEiJeu3amJPFMzDQe5UywzfJPMrgTf4MYKcKMCZGYqhrV9G7RanLynd2iLKKmVvFbb5HLXCTVPabtBDsBa",
  "key33": "5fJE1E6T2DthBBVTKGM7aFWZaeXL136M8GopGp1TCv7YtCPDWRQFsxtCxaUemZZXAGbQUeEdasy5oNReiHW6Nsvh"
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
